import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AlbumContainer from './AlbumContainer';
import UserService from '../../services/userService';
import Utils from '../../utils/utils';


class Browse extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {

    }

    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        albums: state.albums
    }
};



export default connect(mapStateToProps)(Browse);
