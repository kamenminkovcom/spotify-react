import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/artist';
import Loading from '../../../components/common/Loading/Loading';

class ArtistPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        if (this.props.artist === null) {
            return(
                <Loading/>
            )
        }

        return(
            <div>

            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => (
    {
        artist: state.artist
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);