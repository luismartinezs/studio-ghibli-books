import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import Wrapper from '../view/wrapper';
import { asyncCall, makeMovies } from '../model/model';

// REDUX
// action
const SHOW_HOME = 'SHOW_HOME';
const SHOW_DETAIL = 'SHOW_DETAIL';
const SHOW_CART = 'SHOW_CART';
const SHOW_MOBILE_MENU = 'SHOW_MOBILE_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

const screens = {
    HOME: "HOME",
    DETAIL: "DETAIL",
    CART: "CART",
    MOBILE_MENU: "MOBILE_MENU",
}

// initialize state
const initialState = {
    currentScreen: screens.HOME,
    prevScreen: '',
};

// action creator
const showScreen = (screen) => {
    console.log("Action creator showScreen called");
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
        case screens.MOBILE_MENU:
            return {
                type: SHOW_MOBILE_MENU,
                currentScreen: screens.MOBILE_MENU,
            }
        default:
            return {
                type: SHOW_HOME,
                currentScreen: screens.HOME,
            };
    }
}

const closeMenu = () => {
    console.log("closeMenu called");
    return {
        type: CLOSE_MENU,
    }
}

// reducer
const reducer = (state = initialState, action) => {
    console.log("state:", state);
    let newState = {};
    let prevScreen = state.currentScreen;
    switch (action.type) {
        case SHOW_HOME:
            console.log("currentScreen switched to HOME");
            newState = Object.assign({}, state, { currentScreen: action.currentScreen, prevScreen: prevScreen });
            console.log("new state:", newState);
            return newState;
        case SHOW_DETAIL:
            console.log("currentScreen switched to DETAIL");
            newState = Object.assign({}, state, { currentScreen: action.currentScreen, prevScreen: prevScreen });
            console.log("new state:", newState);
            return newState;
        case SHOW_CART:
            console.log("currentScreen switched to CART");
            newState = Object.assign({}, state, { currentScreen: action.currentScreen, prevScreen: prevScreen });
            console.log("new state:", newState);
            return newState;
        case SHOW_MOBILE_MENU:
            console.log("currentScreen switched to MOBILE MENU");
            newState = Object.assign({}, state, { currentScreen: action.currentScreen, prevScreen: prevScreen });
            console.log("new state:", newState);
            return newState;
        case CLOSE_MENU:
            console.log("currentScreen switched to MOBILE MENU");
            newState = Object.assign({}, state, { currentScreen: state.prevScreen, prevScreen: prevScreen });
            console.log("new state:", newState);
            return newState;
        default:
            return state;
    }
}

const store = createStore(reducer);

// REACT
class Presentational extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let t0 = Date.now();
        let json = asyncCall();
        console.log(`Async call completed in ${Date.now() - t0} ms`);
        console.log('json:', json);
        let moviesArr = makeMovies(json);
        console.log('moviesArr:',moviesArr);
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="presentational">
                <Wrapper props={this.props} />
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

const mapDispatchToProps = dispatch => ({
    showScreen: screen => dispatch(showScreen(screen)),
    closeMenu: () => dispatch(closeMenu()),
});

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