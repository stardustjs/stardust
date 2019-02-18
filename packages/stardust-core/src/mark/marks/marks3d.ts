import { compile } from "../compile";

export function circle3d() {
  const spec = compile(`
    mark Circle(
      center: Vector3 = [0, 0, 0],
      radius: float = 0.1,
      color: Color = [1, 1, 1, 1]
    ) {
      let camera_direction = get_camera_direction(center);
      let ex = normalize(cross(camera_direction, Vector3(0, 1, 0)));
      let ey = cross(camera_direction, ex);
      let p1 = center + ex * radius + ey * radius;
      let p2 = center + ex * radius - ey * radius;
      let p3 = center - ex * radius - ey * radius;
      let p4 = center - ex * radius + ey * radius;
      emit [
        { position: p1, color: color, off: Vector2(1, 1) },
        { position: p3, color: color, off: Vector2(-1, -1) },
        { position: p2, color: color, off: Vector2(1, -1) },
        { position: p1, color: color, off: Vector2(1, 1) },
        { position: p4, color: color, off: Vector2(-1, 1) },
        { position: p3, color: color, off: Vector2(-1, -1) }
      ];
    }
    shader CircleShader(color: Color, off: Vector2) {
      let r = length(off);
      if(r > 1 || color.a < 0.001) {
        discard;
      } else {
        emit { color: color };
      }
    }
  `);
  spec.Circle.shader = spec.CircleShader;
  return spec.Circle;
}

export function line3d() {
  return compile(`
    import { Line } from P3D;
    mark Line3D(
      p1: Vector3 = [0, 0, 0],
      p2: Vector3 = [0, 0, 0],
      width: float = 0.1,
      color: Color = [1, 1, 1, 1]
    ) {
      Line(p1, p2, width, color);
    }
  `).Line3D;
}

export function polyline3d() {
  return compile(`
    import { Line } from P3D;
    mark Line3D(
      p: Vector3 = [0, 0, 0],
      p_n: Vector3 = [0, 0, 0],
      width: float = 0.1,
      color: Color = [1, 1, 1, 1]
    ) {
      Line(p, p_n, width, color);
    }
  `).Line3D;
}
