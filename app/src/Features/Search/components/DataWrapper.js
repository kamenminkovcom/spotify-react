import React from 'react';
import PropTypes from 'prop-types';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import Tracks from '../../../components/common/Tracks/Tracks';
import Artists from '../../../components/common/Artists/Artists';


const DataWrapper = ({data, type}) => {
    switch (type) {
        case 'playlist':
        case 'album':
            return (
                <CoverArtsList coverArts={data}/>
            );
        case 'artist':
            return (
                <Artists artists={data}/>
            );
        case 'track':
            return (
                <Tracks tracks={data}/>
            )
    }
};

DataWrapper.propTypes = {
    data: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
};

export default DataWrapper;