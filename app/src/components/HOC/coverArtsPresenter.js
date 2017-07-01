import React from 'react';

const  coverArtsPresenter = (dataGetter,ComposedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        componentWillMount() {
            dataGetter(this.props);
        }

        render() {
            return(
                <ComposedComponent {...this.props}/>
            )
        }
    }
};

export default coverArtsPresenter;