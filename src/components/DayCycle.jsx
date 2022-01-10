import React, { useState, useEffect } from 'react';

const DayNight = () => {
  const [timeOfDay, setTimeOfDay] = useState(0);

  return (
    <div className='dayCycleContainer'>
      <div className='dayCycle'>
        <span className='moonIcon midnight'>&#127765;</span>
        <span className='moonIcon oneOClock'>&#127765;</span>
        <span className='moonIcon twoOClock'>&#127765;</span>
        <span className='moonIcon threeOClock'>&#127765;</span>
        <span className='moonIcon fourOClock'>&#127765;</span>
        <span className='moonIcon fiveOClock'>&#127765;</span>
        <span className='sunIcon sixOClock'>&#127774;</span>
        <span className='sunIcon sevenOClock'>&#127774;</span>
        <span className='sunIcon eightOClock'>&#127774;</span>
        <span className='sunIcon nineOClock'>&#127774;</span>
        <span className='sunIcon tenOClock'>&#127774;</span>
        <span className='sunIcon elevenOClock'>&#127774;</span>
        <span className='sunIcon twelveOClock'>&#127774;</span>
      </div>
    </div>
  )
}

export default DayNight;