import React from 'react';

let Track = (props) => {

return(
    <li className="track-default">
        <div className="track-index">
            {props.index}
        </div>
        <div className="track-name">
            {props.name}
        </div>
        <div className="track-duration">
            {props.duration}
        </div>
    </li>
);
};

export default Track;
