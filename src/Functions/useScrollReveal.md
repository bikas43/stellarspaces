import useState
*****************
    import React, { useState } from 'react';

Import the function in where you want to use
*********************************************
    import { useScrollReveal } from './useScrollReveal';

Create the hook
****************
    const { isRevealed, elementRef } = useScrollReveal(0.3);

Use inline Styling
******************  
  const styles = {
    opacity: isRevealed ? 1 : 0,
    transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  };

use it in the div element
*************************
  <div ref={elementRef} style={styles}>
          //you component or object
  </div>