import React, { Component } from 'react';

let Track = (props) => {

    return(
        <li className="track-default">
            <div>
                {props.index}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.duration}
            </div>
        </li>
    );
};

export default Track;
