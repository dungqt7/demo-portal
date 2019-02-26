import React from 'react';
export const ShowBar = props => {
    const on = props.show;
    return (
        <div>
                <button onClick={() => props.showTooltip()}> show tooltip </button>
                { on ?  <h1>this is the tooltip</h1> : null }
        </div>
      
    );
};