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
        <span className='sunIcon thirteenOClock'>&#127774;</span>
        <span className='sunIcon fourteenOClock'>&#127774;</span>
        <span className='sunIcon fifteenOClock'>&#127774;</span>
        <span className='sunIcon sixteenOClock'>&#127774;</span>
        <span className='sunIcon seventeenOClock'>&#127774;</span>
        <span className='sunIcon eighteenOClock'>&#127774;</span>
        <span className='sunIcon nineteenOClock'>&#127765;</span>
        <span className='sunIcon twentyOClock'>&#127765;</span>
        <span className='sunIcon twentyOneOClock'>&#127765;</span>
        <span className='sunIcon twentyTwoOClock'>&#127765;</span>
        <span className='sunIcon twentyThreeOClock'>&#127765;</span>
      </div>
    </div>
  )
}

export default DayNight;