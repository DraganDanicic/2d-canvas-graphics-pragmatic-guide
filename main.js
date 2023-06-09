/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

function mkCanvas(root, width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    root.appendChild(canvas);
    return canvas;
}
function drawLineSegment(ctx, point1, point2) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
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
            drawLineSegment(ctx, [0, 0], [100, 100]);
        }
    }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBUyxRQUFRLENBQUMsSUFBaUIsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUNoRSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUN0QixHQUE2QixFQUM3QixNQUF3QixFQUN4QixNQUF3QjtJQUV4QixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUUxQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsQ0FBQztJQUNDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsSUFBSSxVQUFVLEVBQUU7UUFDZCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksR0FBRyxFQUFFO1lBQ1AsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFDO0tBQ0Y7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMmQtZ3JhcGhpY3MtYW5kLWdlb21ldHJ5LXdpdGgtanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWtDYW52YXMocm9vdDogSFRNTEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICByb290LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gIHJldHVybiBjYW52YXM7XG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5lU2VnbWVudChcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIHBvaW50MTogW251bWJlciwgbnVtYmVyXSxcbiAgcG9pbnQyOiBbbnVtYmVyLCBudW1iZXJdXG4pIHtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcblxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMCwgMCk7XG4gIGN0eC5saW5lVG8oMTAwLCAxMDApO1xuICBjdHguc3Ryb2tlKCk7XG59XG5cbi8qKlxuICogTWFpbiBwcm9ncmFtXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc1Jvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1Jvb3RcIik7XG4gIGlmIChjYW52YXNSb290KSB7XG4gICAgY29uc3QgY2FudmFzID0gbWtDYW52YXMoY2FudmFzUm9vdCwgNjAwLCA2MDApO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKGN0eCkge1xuICAgICAgZHJhd0xpbmVTZWdtZW50KGN0eCwgWzAsIDBdLCBbMTAwLCAxMDBdKTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=