function drawLineSegment(
  ctx: CanvasRenderingContext2D,
  point1: [number, number],
  point2: [number, number]
) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";

  ctx.beginPath();
  ctx.moveTo(...point1);
  ctx.lineTo(...point2);
  ctx.stroke();
}

export default drawLineSegment;
