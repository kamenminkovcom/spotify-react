import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import * as actions from '../actions/browse';
import Heading from '../../../components/common/Heading/Heading';


class Genres extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.getGenres();
    }

    render() {
        return (
            <div>
                <Heading text={'Genres & Moods'}/>
                <CoverArtsList coverArts={this.props.browse.genres}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        browse: state.browse
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Genres);