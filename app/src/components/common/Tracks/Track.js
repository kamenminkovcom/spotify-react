import React from 'react';
import PropTypes from 'prop-types';

let Track = (props) => {

    return (
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

Track.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
};

export default Track;
