import { compile } from "../compile";

export function circle() {
  const spec = compile(`
    mark Circle(
      center: Vector2 = [ 0, 0 ],
      radius: float = 1,
      color: Color = [ 0, 0, 0, 1 ]
    ) {
      let rs = radius * 1.4142135624;
      emit [
        { position: center + Vector2(rs, 0), offset: Vector2(1, 1), color: color },
        { position: center + Vector2(0, rs), offset: Vector2(-1, 1), color: color },
        { position: center + Vector2(-rs, 0), offset: Vector2(-1, -1), color: color }
      ];
      emit [
        { position: center + Vector2(-rs, 0), offset: Vector2(-1, -1), color: color },
        { position: center + Vector2(0, -rs), offset: Vector2(1, -1), color: color },
        { position: center + Vector2(rs, 0), offset: Vector2(1, 1), color: color }
      ];
    }
    shader CircleShader(
      color: Color,
      offset: Vector2
    ) {
      let dist = dot(offset, offset);
      if(dist > 1.0) {
        discard;
      } else {
        emit { color: color };
      }
    }
  `);
  spec.Circle.shader = spec.CircleShader;
  return spec.Circle;
}

export function rect() {
  return compile(`
    mark Rectangle(
      p1: Vector2 = [ 0, 0 ],
      p2: Vector2 = [ 0, 0 ],
      color: Color = [ 0, 0, 0, 1 ]
    ) {
      emit [
        { position: Vector2(p1.x, p1.y), color: color },
        { position: Vector2(p2.x, p1.y), color: color },
        { position: Vector2(p2.x, p2.y), color: color }
      ];
      emit [
        { position: Vector2(p1.x, p1.y), color: color },
        { position: Vector2(p1.x, p2.y), color: color },
        { position: Vector2(p2.x, p2.y), color: color }
      ];
    }
  `).Rectangle;
}

export function line() {
  return compile(`
    mark Line(
      p1: Vector2 = [ 0, 0 ],
      p2: Vector2 = [ 0, 0 ],
      width: float = 1,
      color: Color = [ 0, 0, 0, 1 ]
    ) {
      let d = normalize(p2 - p1);
      let t = Vector2(d.y, -d.x) * (width / 2);
      emit [
        { position: p1 + t, color: color },
        { position: p1 - t, color: color },
        { position: p2 + t, color: color }
      ];
      emit [
        { position: p1 - t, color: color },
        { position: p2 - t, color: color },
        { position: p2 + t, color: color }
      ];
    }
  `).Line;
}

export function wedge(sides: number = 60) {
  return compile(`
    import { Triangle } from P2D;

    mark Wedge(
      p1: Vector2 = [ 0, 0 ],
      theta1: float = 0,
      theta2: float = 0,
      length: float = 10,
      width: float = 1,
      color: Color = [ 0, 0, 0, 1 ]
    ) {
      let dTheta = (theta2 - theta1) / 60;
      let dL = length / 60;
      for(i in 0..59) {
        let dThetaA = i * dTheta;
        let dThetaB = (i + 1) * dTheta;
        let thetaA = theta1 + dThetaA;
        let thetaB = theta1 + dThetaB;
        let thetaCenterA = theta1 + dThetaA / 2;
        let thetaCenterB = theta1 + dThetaB / 2;
        let dlA = dL * i;
        let dlB = dL * (i + 1);
        if(dThetaA > 1e-5 || dThetaA < -1e-5) {
          dlA = dlA / dThetaA * 2 * sin(dThetaA / 2);
        }
        if(dThetaB > 1e-5 || dThetaB < -1e-5) {
          dlB = dlB / dThetaB * 2 * sin(dThetaB / 2);
        }
        let pAdvA = Vector2(-sin(thetaCenterA), cos(thetaCenterA)) * dlA;
        let pAdvB = Vector2(-sin(thetaCenterB), cos(thetaCenterB)) * dlB;
        let pA = p1 + pAdvA;
        let pB = p1 + pAdvB;

        let dpA = Vector2(cos(thetaA), sin(thetaA)) * width * 0.5;
        let dpB = Vector2(cos(thetaB), sin(thetaB)) * width * 0.5;

        Triangle(pA + dpA, pB + dpB, pB - dpB, color);
        Triangle(pA + dpA, pB - dpB, pA - dpA, color);
      }
    }
  `).Wedge;
}

export function polyline() {
  const spec = compile(`
    import { Triangle } from P2D;

    mark Sector2(
      c: Vector2,
      p1: Vector2,
      p2: Vector2,
      color: Color
    ) {
      let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);
      Triangle(c, p1, pc, color);
      Triangle(c, pc, p2, color);
    }

    mark Sector4(
      c: Vector2,
      p1: Vector2,
      p2: Vector2,
      color: Color
    ) {
      let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);
      Sector2(c, p1, pc, color);
      Sector2(c, pc, p2, color);
    }

    mark PolylineRound(
      p: Vector2, p_p: Vector2, p_n: Vector2, p_nn: Vector2,
      width: float = 1,
      color: Color = [ 0, 0, 0, 1 ]
    ) {
      let EPS = 1e-5;
      let w = width / 2;
      let d = normalize(p - p_n);
      let n = Vector2(d.y, -d.x);
      let m1: Vector2;
      if(length(p - p_p) < EPS) {
        m1 = n * w;
      } else {
        m1 = normalize(d + normalize(p - p_p)) * w;
      }
      let m2: Vector2;
      if(length(p_n - p_nn) < EPS) {
        m2 = -n * w;
      } else {
        m2 = normalize(normalize(p_n - p_nn) - d) * w;
      }
      let c1a: Vector2;
      let c1b: Vector2;
      let a1: Vector2;
      let a2: Vector2;
      if(dot(m1, n) > 0) {
        c1a = p + m1;
        c1b = p + n * w;
        a2 = c1b;
        a1 = p - m1 * (w / dot(m1, n));
      } else {
        c1a = p + m1;
        c1b = p - n * w;
        a2 = p + m1 * (w / dot(m1, n));
        a1 = c1b;
      }
      let c2a: Vector2;
      let c2b: Vector2;
      let b1: Vector2;
      let b2: Vector2;
      if(dot(m2, n) < 0) {
        c2a = p_n + m2;
        c2b = p_n - n * w;
        b1 = c2b;
        b2 = p_n + m2 * (w / dot(m2, n));
      } else {
        c2a = p_n + m2;
        c2b = p_n + n * w;
        b2 = c2b;
        b1 = p_n - m2 * (w / dot(m2, n));
      }
      Sector4(p, c1a, c1b, color);
      Sector4(p_n, c2a, c2b, color);
      Triangle(p, a1, b1, color);
      Triangle(p, b1, p_n, color);
      Triangle(p, a2, b2, color);
      Triangle(p, b2, p_n, color);
    }
  `).PolylineRound;
  spec.repeatBegin = 1;
  spec.repeatEnd = 1;
  return spec;
}
