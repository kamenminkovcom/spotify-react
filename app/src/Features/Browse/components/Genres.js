import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import coverArtsPresenter from '../../../components/HOC/coverArtsPresenter';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import * as actions from '../actions/browse';
import Heading from '../../../components/common/Heading/Heading';

let Genres = (props) => (
    <div>
        <Heading text={'Genres & Moods'}/>
        <CoverArtsList coverArts={props.browse.genres}/>
    </div>
);

Genres = coverArtsPresenter((props) => {
    props.actions.getGenres();
})(Genres);

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