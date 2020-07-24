import React from 'react';

const BlockComponent = ({ shortData, ColorApp }) => {
    return (
        shortData.map(el =>
            <li
                data-tooltip={`there are ${el[2]} person`}
                className="list__data-item"
                style={{ backgroundColor: ColorApp(el[2]) }}
                key={el[0]} >

                {el[1]}

            </li>)
    )
}
export default BlockComponent;
