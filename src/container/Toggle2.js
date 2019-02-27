import React from 'react';
export const Toggle2Bar = props => {
        const on = props.toogle2;
        return ( <
            div >
            <
            button onClick = {
                () => props.toogledemo2() } > show tooltip2 < /button> {
                on ? < h1 > this is the tooltip2 < /h1> : null } <
                    /div>

            );
        };