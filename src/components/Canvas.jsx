import React, { useEffect, useState, useRef } from "react";
import { getLineThroughOrigin, drawGradient } from '../helpers/dayCycle';

const Canvas = ({ angleIn }) => {
  const canvas = useRef();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    function makeGradient(angle) {
        const width = 128;
        const height = 128;
        const rect = { x1: 0, y1: 0, x2: width, y2: height};
        const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        //console.log(`radius ${radius}`);
        const line = getLineThroughOrigin({ x: width/2, y: height/2}, radius, angle);
        //console.log(`line: ${JSON.stringify(line)}`);
        drawGradient(ctx, line, rect);
    }
    function rotateAngle() {
      if (angle < 1130) {
        setAngle(angle + 1);
      } else {
        setAngle(0);
      }
    }
    setTimeout(() => {
      rotateAngle();
      makeGradient(angle);
    }, 50);
  }, [canvas, angle]);

  return (
    <canvas ref={canvas} id="dayCycleCanvas" width='128' height='128' ></canvas>
  );
};

export default Canvas;
