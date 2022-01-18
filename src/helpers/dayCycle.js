const canvasSetup = (c) => {
  let ctx = c.getContext('2d');
  return ctx;
};

const getPointOnCircle = (origin, radius, angle) => {
  let newX = origin.x + radius * Math.cos(angle / 180);
  let newY = origin.y + radius * Math.sin(angle / 180);
  return { x: newX, y: newY };
};

const getLineThroughOrigin = (origin, radius, angle) => {
  let p1 = getPointOnCircle(origin, radius, angle);
  let p2 = getPointOnCircle(origin, radius, angle);
  return { p1, p2 };
};

const drawGradient = (line, ctx, rect) => {
  let gradient = ctx.createLinearGradient(line.p1.x, line.p1.y, line.p2.x, line.p2.y);
  gradient.addColorStop(0, '#06b6d4');
  gradient.addColorStop(0.5, '#fda4af');
  gradient.addColorStop(1, '#4c1d95');
  ctx.fillStyle = gradient;
  ctx.fillRect(rect.x1, rect.y1, rect.x2, rect.y2);
  return;
};

export { canvasSetup, getLineThroughOrigin, drawGradient };
