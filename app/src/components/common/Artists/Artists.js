import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';
import artists from './artists.css';

let Artists = ({artists}) => {
    return (
        <div className="artists">
            {artists.map((p, i) => <Artist detailsNavigation={p.detailsNavigation} imageUrl={p.imageUrl} name={p.name} key={p.name + i} />)}
        </div>
    )
};

Artists.propTypes = {
    artists: PropTypes.array.isRequired
};

export default Artists;