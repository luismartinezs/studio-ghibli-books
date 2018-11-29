import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import Wrapper from '../view/wrapper';

// REDUX
// action
const SHOW_HOME = 'SHOW_HOME';

// initialize state
const initialState = {
    currentScreen: 'home',
};

// action creator
const showHome = () => {
    return {
        type: SHOW_HOME,
        screen: 'home',
    }
}

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HOME:
            return Object.assign({}, state, action.currentScreen);
        default:
            return state;
    };
}

const store = createStore(reducer);

// REACT
class Presentational extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: 'home',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            currentScreen: 'home',
        });
    }
    handleSubmit() {
        this.props.showHome(this.state.currentScreen);
        this.setState({
            something: '',
        });
    }
    render() {
        return (
            <div>
                <Wrapper />
            </div>
        );
    }
}

// REACT-REDUX
function mapStateToProps(state) {
    return {
        message: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showHome: function (message) {
            return (dispatch(showHome(message)));
        }
    };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}

export default AppWrapper;