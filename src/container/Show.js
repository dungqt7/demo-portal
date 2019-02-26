import React from 'react';
import Portal from '../Portal';
export const ShowBar = props => {
    const on1 = props.show;
    return ( <
        div >
        <
        button onClick = {
            () => console.log(props.show()) } > Show tooltip < /button> {
            on1 ?
                <
                h1 > this is the Tooltip < /h1> : null
        }

        <
        /div>
    )
};