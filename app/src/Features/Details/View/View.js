import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import * as actions from './actions/view';
import Heading from '../../../components/common/Heading/Heading';

class View extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.actions.getPlaylists(id);
    }

    render() {
        return (
            <div>
                <Heading text={'Popular Playlists'}/>
                <CoverArtsList coverArts={this.props.view.playlists}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        view: state.view
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(View);