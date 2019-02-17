function UserCode(platform, callback) {
    d3.json("beethoven.json", (err, DATA) => {

        let marks = Stardust.mark.compile(`
            import { Triangle } from P3D;

            mark Point(
                center: Vector3,
                size: float,
                color: Color
            ) {
                let p1 = Vector3(center.x + size, center.y + size, center.z - size);
                let p2 = Vector3(center.x + size, center.y - size, center.z + size);
                let p3 = Vector3(center.x - size, center.y + size, center.z + size);
                let p4 = Vector3(center.x - size, center.y - size, center.z - size);
                Triangle(p1, p2, p3, color);
                Triangle(p4, p1, p2, color);
                Triangle(p4, p2, p3, color);
                Triangle(p4, p3, p1, color);
            }

            mark Line(
                p1: Vector3, p2: Vector3,
                size: float,
                color: Color
            ) {
                let x1 = Vector3(p1.x, p1.y, p1.z - size);
                let x2 = Vector3(p1.x, p1.y, p1.z + size);
                let x3 = Vector3(p2.x, p2.y, p2.z + size);
                let x4 = Vector3(p2.x, p2.y, p2.z - size);
                Triangle(x1, x2, x3, color);
                Triangle(x4, x1, x2, color);
                Triangle(x4, x2, x3, color);
                Triangle(x4, x3, x1, color);
            }

            function getPosition(year: float, dayOfYear: float, secondOfDay: float): Vector3 {
                let angle = dayOfYear / 366 * PI * 2;
                let dayScaler = (secondOfDay / 86400 - 0.5);
                let r = (year - 2006) / (2015 - 2006) * 200 + 50 + dayScaler * 50;
                let x = cos(angle) * r;
                let y = sin(angle) * r;
                let z = dayScaler * 50;
                return Vector3(x / 100, y / 100, z / 100);
            }

            function getPosition2(year: float, dayOfYear: float, secondOfDay: float): Vector3 {
                let angle = dayOfYear / 366 * PI * 2;
                let r = secondOfDay / 86400 * 200 + 50;
                let x = cos(angle) * r;
                let y = sin(angle) * r;
                let z = 0;
                return Vector3(x / 100, y / 100, z / 100);
            }

            mark Glyph(
                year: float,
                dayOfYear: float,
                secondOfDay: float,
                duration: float,
                t: float,
                color: Color
            ) {
                let p = getPosition(year, dayOfYear, secondOfDay);
                let p2 = getPosition2(year, dayOfYear, secondOfDay);
                Point(p * (1 - t) + p2 * t, log(1 + duration) / 200, color = color);
            }

            mark LineChart(
                year1: float,
                dayOfYear1: float,
                secondOfDay1: float,
                year2: float,
                dayOfYear2: float,
                secondOfDay2: float,
                c1: float,
                c2: float,
                t: float
            ) {
                let p1 = getPosition(year1, dayOfYear1, secondOfDay1);
                let p1p = getPosition2(year1, dayOfYear1, secondOfDay1);
                let p2 = getPosition(year2, dayOfYear2, secondOfDay2);
                let p2p = getPosition2(year2, dayOfYear2, secondOfDay2);
                p1 = p1 + (p1p - p1) * t;
                p2 = p2 + (p2p - p2) * t;
                p1 = Vector3(p1.x, p1.y, c1 / 100);
                p2 = Vector3(p2.x, p2.y, c2 / 100);
                Line(p1, p2, 0.5 / 100, Color(1, 1, 1, 0.8));
            }
        `);

        let mark = Stardust.mark.create(marks.Glyph, platform);
        let lineChart = Stardust.mark.create(marks.LineChart, platform);

        DATA.forEach((d) => {
            d.duration = (d.checkInFirst - d.checkOut) / 86400;
            d.checkOut = new Date(d.checkOut * 1000);
            d.checkIn = new Date(d.checkInFirst * 1000);
        });
        DATA = DATA.filter((d) => {
            if(!d.checkIn || !d.checkOut) return false;
            if(d.duration > 360) return false;
            return d.checkOut.getFullYear() >= 2007 && d.checkOut.getFullYear() < 2016 && d.checkIn.getFullYear() >= 2007 && d.checkIn.getFullYear() < 2016;
        });

        // Daily summary.
        let days = new Map();
        DATA.forEach((d) => {
        let day = Math.floor(d.checkOut.getTime() / 1000 / 86400) * 86400;
        if(!days.has(day)) days.set(day, 1);
        else days.set(day, days.get(day) + 1);
        });
        let daysArray = [];
        days.forEach((count, day) => {
            daysArray.push({ day: new Date(day * 1000), count: count });
        });
        daysArray.sort((a, b) => a.day.getTime() - b.day.getTime());

        let colorScale = d3.scale.category10();
        let color = (d) => {
            let rgb = d3.rgb(colorScale(d.deweyClass));
            return [ rgb.r / 255, rgb.g / 255, rgb.b / 255, 0.5 ];
        };

        let dayOfYear = (d) => {
            return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
        }
        let secondOfDay = (d) => {
            return d.getMinutes() * 60 + d.getHours() * 3600 + d.getSeconds();
        }
        mark.attr("duration", (d) => d.duration);
        mark.attr("year", (d) => d.checkOut.getFullYear());
        mark.attr("dayOfYear", (d) => dayOfYear(d.checkOut));
        mark.attr("secondOfDay", (d) => secondOfDay(d.checkOut));
        mark.attr("color", color);
        // mark.attr("inYear", (d) => d.checkIn.getFullYear());
        // mark.attr("inDayOfYear", (d) => dayOfYear(d.checkIn));
        // mark.attr("inSecondOfDay", (d) => secondOfDay(d.checkIn));
        mark.data(DATA);

        lineChart.attr("year1", (d) => d.day.getFullYear());
        lineChart.attr("dayOfYear1", (d) => dayOfYear(d.day));
        lineChart.attr("secondOfDay1", (d) => secondOfDay(d.day));
        lineChart.attr("year2", (d, i) => daysArray[i + 1].day.getFullYear());
        lineChart.attr("dayOfYear2", (d, i) => dayOfYear(daysArray[i + 1].day));
        lineChart.attr("secondOfDay2", (d, i) => secondOfDay(daysArray[i + 1].day));
        let zScale = Stardust.scale.linear().domain([ 0, d3.max(daysArray, (d) => d.count) ]).range([20, 60]);
        lineChart.attr("c1", zScale((d) => d.count));
        lineChart.attr("c2", zScale((d, i) => daysArray[i + 1].count));
        lineChart.data(daysArray.slice(0, -1));

        mark.attr("t", 0);

        let t0 = new Date().getTime();

        function render() {
            let time = (new Date().getTime() - t0) / 1000;
            let t = (Math.sin(time / 5) + 1) / 2;
            mark.attr("t", t);

            platform.setPose(
                new Stardust.Pose(
                    new Stardust.Vector3(0, 0, 1),
                    new Stardust.Quaternion(0, 0, 0, 1)
                )
            );
            lineChart.attr("t", mark.attr("t"));
            lineChart.render();
            mark.render();
        }

        callback({
            render: render
        });
    });
}