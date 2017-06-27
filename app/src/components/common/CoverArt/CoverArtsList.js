import React from 'react';
import PropTypes from 'prop-types';
import CoverArt from './CoverArt';
import coverArtsList from './coverArtsList.css';

const CoverArtsList = ({coverArts}) => {
    return (
        <div className="cover-arts-list">
            {coverArts.map((p, i) => <CoverArt detailsNavigation={p.detailsNavigation} name={p.name} owners={p.owners} imageUrl={p.imageUrl} id={p.id} key={p.name + i} />)}
        </div>
    )
};

CoverArtsList.propTypes = {
    coverArts: PropTypes.array.isRequired
};

export default CoverArtsList;