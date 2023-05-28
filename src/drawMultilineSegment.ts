function drawMultiLineSegment(
  ctx: CanvasRenderingContext2D,
  points: [number, number][]
) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";

  ctx.beginPath();
  ctx.moveTo(...points[0]);
  points.slice(1).forEach(p => ctx.lineTo(...p))
  ctx.stroke();
}

export default drawMultiLineSegment;
