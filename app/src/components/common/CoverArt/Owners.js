import React  from 'react';
import {Link} from 'react-router-dom';

let Owners = ({owners}) => {
    return (
        <div>
            {owners.map(a => <Link to={a.detailsNavigation} className="owner-name-link" key={a.name}>{a.name}</Link>)}
        </div>
    )
};

export default Owners;