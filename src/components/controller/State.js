import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import Wrapper from '../view/wrapper';

// REDUX
// action
const SHOW_HOME = 'SHOW_HOME';
const SHOW_DETAIL = 'SHOW_DETAIL';
const SHOW_CART = 'SHOW_CART';

const screens = {
    HOME: "HOME",
    DETAIL: "DETAIL",
    CART: "CART",
}

// initialize state
const initialState = {
    currentScreen: screens.HOME,
};

// action creator
const showScreen = (screen) => {
    switch (screen) {
        case screens.HOME:
            return {
                type: SHOW_HOME,
                currentScreen: screens.HOME,
            };
        case screens.DETAIL:
            return {
                type: SHOW_DETAIL,
                currentScreen: screens.DETAIL,
            };
        case screens.CART:
            return {
                type: SHOW_CART,
                currentScreen: screens.CART,
            };
        default:
            return {
                type: SHOW_HOME,
                currentScreen: screens.HOME,
            };
    }
}

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HOME:
            return Object.assign({}, state, action.currentScreen);
        case SHOW_DETAIL:
            return Object.assign({}, state, action.currentScreen);
        case SHOW_CART:
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
    }

    render() {
        return (
            <div>
                <Wrapper currentScreen={this.props.currentScreen} />
            </div>
        );
    }
}

function getCurrentScreen(state) {
    return state.currentScreen;
}

// REACT-REDUX
function mapStateToProps(state) {
    return {
        currentScreen: getCurrentScreen(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showScreen: function (screen) {
            return (dispatch(showScreen(screen)));
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