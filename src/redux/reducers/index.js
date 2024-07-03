// src/redux/reducers/index.js

const initialState = {
    requests: [],
    filter: ''
  };
  
  const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_REQUEST':
        return {
          ...state,
          requests: [...state.requests, action.payload]
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  };
  
  export default requestsReducer;
  