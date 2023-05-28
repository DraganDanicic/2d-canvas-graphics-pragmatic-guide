function mkCanvas(root: HTMLElement, width: number, height: number) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.border = '1px solid black'
  root.appendChild(canvas);
  return canvas;
}

export default mkCanvas;