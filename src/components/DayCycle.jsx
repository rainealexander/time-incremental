import React, { useState, useEffect } from 'react';
import { dayCycleClasses, moonCycleClasses, moonPhases } from './cycleClasses';
import Canvas from './Canvas';

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
    }, 500);
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

  return (
    <div className='dayCycleContainer'>
      <Canvas />
      <div className='dayCycle'>
        <span className={moonClass}>{moonPhases[moonCycle]}</span>
        <span className={dayClass}>&#127774;</span>
      </div>
    </div>
  )
}

export default DayNight;
