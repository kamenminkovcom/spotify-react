import React from 'react';
import PropTypes from 'prop-types';
import heading from './heading.css';

const Heading = ({text}) => {
    return (
        <h1 className="heading">{text}</h1>
    );
};

Heading.propTypes = {
    text: PropTypes.string.isRequired
};

export default Heading
