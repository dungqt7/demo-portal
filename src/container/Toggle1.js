import React from 'react';
export const Toggle1Bar = props => {
        const on = props.toogle1;
        return ( 
            <div>
                <button onClick = {() => props.toogledemo1() } > show tooltip1 </button> {
                    on ? <h1> this is the tooltip1 </h1> : null } 
            </div>

            );
        };