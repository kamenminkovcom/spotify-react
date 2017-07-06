import React from 'react';
import CoverArtsList from '../../components/common/CoverArt/CoverArtsList';
import Artists from '../../components/common/Artists/Artists';
import Tracks from '../../components/common/Tracks/Tracks';

function searchResultsPresenter(type, context) {
    return class extends React.Component {
        componentWillMount() {
            if (context.search[type].length === 0) {
                context.actions.makeRequest(context.search.searchType, context.search.searchTerm);
            }
        }

        render() {
            switch (type) {
                case 'playlists':
                case 'albums':
                    return(
                        <div>
                            <CoverArtsList coverArts={context.search[type]}/>
                        </div>
                    );
                case 'artists':
                    return(
                        <div>
                            <Artists artists={context.search[type]}/>
                        </div>
                    );
                case 'tracks':
                    return(
                        <div className="tracks-result">
                            <Tracks tracks={context.search[type]}/>
                        </div>
                    );
                default:
                    return null;

            }
        }
    }
}

export default searchResultsPresenter;
