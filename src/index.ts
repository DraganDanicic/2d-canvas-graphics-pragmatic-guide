import drawLineSegment from "./drawLineSegment";
import drawMultiLine from "./drawMultilineSegment";
import mkCanvas from "./mkCanvas";

function genRadialPoly(
  center: [number, number],
  radius: number,
  horns: number
): [number,number][] {
  const angularIncrement = (2 * Math.PI) / horns;
  let currentAngle = 0;
  const points = Array.apply(null, Array(horns)).map((e, i) => {
    const point = [
      center[0] + radius / 2 * Math.sin(currentAngle),
      center[1] + radius / 2 * Math.cos(currentAngle),
    ];
    currentAngle += angularIncrement;
    return point as [number, number];
  });
  points.push(points[0]);
  debugger
  return points;
}

/**
 * Main program
 */
(function () {
  const canvasRoot = document.getElementById("canvasRoot");
  if (canvasRoot) {
    const canvas = mkCanvas(canvasRoot, 600, 600);
    const ctx = canvas.getContext("2d");
    if (ctx) {
      drawLineSegment(ctx, [0, 0], [70, 70]);
      drawMultiLine(ctx, [
        [100, 100],
        [100, 200],
        [200, 300],
        [300, 200],
      ]);
      drawMultiLine(
        ctx,
        [
          [100, 100],
          [100, 200],
          [200, 200],
          [200, 100],
          [100, 100],
        ].map((p) => [p[0] + 250, p[1]])
      );
      drawMultiLine(
        ctx,
        genRadialPoly([70, 400], 100, 3)
      );

      drawMultiLine(
        ctx,
        genRadialPoly([180, 400], 100, 5)
      );

      drawMultiLine(
        ctx,
        genRadialPoly([290, 400], 100, 10)
      );

      drawMultiLine(
        ctx,
        genRadialPoly([400, 400], 100, 15)
      );

      drawMultiLine(
        ctx,
        genRadialPoly([510, 400], 100, 100)
      );
    }
  }
})();
