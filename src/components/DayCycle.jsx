import React, { useState, useEffect } from 'react';
import { dayCycleClasses, moonCycleClasses, moonPhases } from './cycleClasses';
import { canvasSetup, getLineThroughOrigin, drawGradient } from '../helpers/dayCycle';

const DayNight = () => {
  const [timeOfDay, setTimeOfDay] = useState(0);
  const [dayClass, setDayClass] = useState(null);
  const [moonCycle, setMoonCycle] = useState(0);
  const [moonClass, setMoonClass] = useState(null);

  useEffect(() => {
    function dayLoop() {
      if (timeOfDay < 23) {
        setTimeOfDay(timeOfDay + 1);
      } else {
        setTimeOfDay(0);
        moonLoop();
      }
    }
    setTimeout(() => {
      dayLoop();
    }, 200);
    function moonLoop() {
      if (moonCycle < 7) {
        setMoonCycle(moonCycle + 1);
      } else {
        setMoonCycle(0);
      }
    }
    setDayClass(dayCycleClasses[timeOfDay]);
    setMoonClass(moonCycleClasses[moonCycle]);
  }, [timeOfDay, moonCycle])

  useEffect(() => {
    function makeGradient(angle = 0) {
      let canvas = document.getElementById('dayCycleCanvas');
      let ctx = canvasSetup(canvas);
      const width = canvas.getBoundingClientRect().width;
      const height = canvas.getBoundingClientRect().height;
      const rect = { x1: 0, y1: 0, x2: width, y2: height};
      let radius = Math.sqrt(width^2 + height^2);
      const line = getLineThroughOrigin({ x: width/2, y: height/2}, radius, angle);
      drawGradient(line, ctx, rect);
    }
    makeGradient();
  })

  return (
    <div className='dayCycleContainer'>
      <canvas id="dayCycleCanvas"></canvas>
      <div className='dayCycle'>
        <span className={moonClass}>{moonPhases[moonCycle]}</span>
        <span className={dayClass}>&#127774;</span>
      </div>
    </div>
  )
}

export default DayNight;
