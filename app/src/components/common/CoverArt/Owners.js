import React  from 'react';
import {Link} from 'react-router-dom';

let Owners = ({owners}) => {
    return (
        <div>
            {owners.map(a => <Link to="" className="owner-name-link">{a.name}</Link>)}
        </div>
    )
};

export default Owners;