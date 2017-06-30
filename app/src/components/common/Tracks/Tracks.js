import React from 'react';
import Track from './Track';
import Utils from '../../../utils/utils';
import tracks from './tracks.css';

let Tracks = (props) => {
    let tracks = props.tracks;
    return(
        <div className="tracks-container">
            <ul className="tracks-list">
                {tracks.map((t, i)=> <Track key={t.name} name={t.name} index={(i+1) + '.'} duration={Utils.millisToMinutesAndSeconds(t.duration_ms)}/>)}
            </ul>
        </div>
    )
};

export default Tracks;