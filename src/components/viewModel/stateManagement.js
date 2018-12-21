import React, { Component } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import Wrapper from "./wrapper";
import { makeMovies } from "../model/movie";
import { asyncCall } from "./asyncCall";

// REDUX
// Standard REDUX structure: https://redux.js.org/basics/exampletodolist
// actions
const SHOW_HOME = "SHOW_HOME";
const SHOW_DETAIL = "SHOW_DETAIL";
const SHOW_CART = "SHOW_CART";
const SHOW_MOBILE_MENU = "SHOW_MOBILE_MENU";
const SHOW_ERROR = "SHOW_ERROR";
const CLOSE_MENU = "CLOSE_MENU";
const GET_MOVIES = "GET_MOVIES";
const DID_LOAD = "DID_LOAD";
const SET_INDEX = "SET_INDEX";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const screens = {
  HOME: "HOME",
  DETAIL: "DETAIL",
  CART: "CART",
  MOBILE_MENU: "MOBILE_MENU",
  ERROR: "ERROR",
  LOADING: "LOADING"
};

// initialize state
const initialState = {
  currentScreen: screens.LOADING,
  prevScreen: "",
  movies: [],
  isLoading: true,
  currentDetailIndex: 0,
  cart: []
};

// action creators
const showScreen = screen => {
  switch (screen) {
    case screens.HOME:
      return {
        type: SHOW_HOME,
        currentScreen: screens.HOME
      };
    case screens.DETAIL:
      return {
        type: SHOW_DETAIL,
        currentScreen: screens.DETAIL
      };
    case screens.CART:
      return {
        type: SHOW_CART,
        currentScreen: screens.CART
      };
    case screens.MOBILE_MENU:
      return {
        type: SHOW_MOBILE_MENU,
        currentScreen: screens.MOBILE_MENU
      };
    case screens.LOADING:
      return {
        type: DID_LOAD,
        currentScreen: screens.LOADING
      };
    case screens.ERROR:
      return {
        type: SHOW_ERROR,
        currentScreen: screens.ERROR
      };
    default:
      return {
        type: SHOW_HOME,
        currentScreen: screens.HOME
      };
  }
};

const closeMenu = () => {
  return {
    type: CLOSE_MENU
  };
};

const getMovies = arr => {
  return {
    type: GET_MOVIES,
    movies: arr
  };
};

const didLoad = () => {
  return {
    type: DID_LOAD,
    isLoading: true
  };
};

const setCurrentDetailIndex = index => {
  return {
    type: SET_INDEX,
    currentDetailIndex: index
  };
};

const addToCart = index => {
  return {
    type: ADD_TO_CART,
    index: index
  };
};

const removeFromCart = index => {
  return {
    type: REMOVE_FROM_CART,
    index: index
  };
};

// reducer
const reducer = (state = initialState, action) => {
  let newState = {};
  let prevScreen = state.currentScreen;

  switch (action.type) {
    case SHOW_HOME:
      newState = Object.assign({}, state, {
        currentScreen: action.currentScreen,
        prevScreen: prevScreen
      });
      return newState;
    case SHOW_DETAIL:
      newState = Object.assign({}, state, {
        currentScreen: action.currentScreen,
        prevScreen: prevScreen
      });
      return newState;
    case SHOW_CART:
      newState = Object.assign({}, state, {
        currentScreen: action.currentScreen,
        prevScreen: prevScreen
      });
      return newState;
    case SHOW_MOBILE_MENU:
      newState = Object.assign({}, state, {
        currentScreen: action.currentScreen,
        prevScreen: prevScreen
      });
      return newState;
    case SHOW_ERROR:
      newState = Object.assign({}, state, {
        currentScreen: action.currentScreen,
        prevScreen: prevScreen
      });
      return newState;
    case CLOSE_MENU:
      newState = Object.assign({}, state, {
        currentScreen: state.prevScreen,
        prevScreen: prevScreen
      });
      return newState;
    case GET_MOVIES:
      newState = Object.assign({}, state, { movies: action.movies });
      return newState;
    case DID_LOAD:
      newState = Object.assign({}, state, {
        isLoading: action.isLoading,
        currentScreen: screens.HOME
      });
      return newState;
    case SET_INDEX:
      newState = Object.assign({}, state, {
        currentDetailIndex: action.currentDetailIndex
      });
      return newState;
    case ADD_TO_CART:
      newState = Object.assign({}, state, {
        cart: [...state.cart, action.index]
      });
      return newState;
    case REMOVE_FROM_CART:
      const itemIndex = state.cart.indexOf(action.index);
      const newCart = state.cart
        .slice(0, itemIndex)
        .concat(state.cart.slice(itemIndex + 1));
      newState = Object.assign({}, state, { cart: newCart });
      return newState;
    default:
      return state;
  }
};

const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// REACT
class Presentational extends Component {
  componentDidMount() {
    let moviesArr;
    let url = "https://ghibliapi.herokuapp.com/films";

    asyncCall(url)
      .then(response => {
        moviesArr = makeMovies(response);
        this.props.getMovies(moviesArr);
        this.props.didLoad();
      })
      .catch(() => {
        this.props.showScreen("ERROR");
      });

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

// REACT-REDUX
function mapStateToProps(state) {
  return {
    currentScreen: state.currentScreen,
    movies: state.movies,
    currentDetailIndex: state.currentDetailIndex,
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => ({
  showScreen: screen => dispatch(showScreen(screen)),
  closeMenu: () => dispatch(closeMenu()),
  getMovies: arr => dispatch(getMovies(arr)),
  didLoad: () => dispatch(didLoad()),
  setCurrentDetailIndex: index => dispatch(setCurrentDetailIndex(index)),
  addToCart: index => dispatch(addToCart(index)),
  removeFromCart: index => dispatch(removeFromCart(index))
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

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
