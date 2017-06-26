import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let Artist = (props) => {
    return(
        <div className='artist-default'>
            <Link to="">
                <div>
                    <img className="artist-image" src={props.images[0].url} alt="" />
                </div>
            </Link>
            <Link to="" className="name-link">
                {props.name}
            </Link>
        </div>
    )
};

export default Artist;