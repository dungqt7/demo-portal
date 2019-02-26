import React from 'react';
import Portal from '../Portal';
export const ToggleBar = props => {
    const on = props.toggle;
    
  return (
      <div>
            <React.Fragment>
              <button onClick={() => props.toggledemo()}> Toggle Portal </button>
              <Portal>
                  {
                      on ? 
                      <h1>this is the portal</h1> : null
                  }
              </Portal>
            </React.Fragment>
          
      </div>
  )
};
