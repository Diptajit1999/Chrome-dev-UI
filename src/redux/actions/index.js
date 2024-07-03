// src/redux/actions/index.js

export const addRequest = (request) => ({
    type: 'ADD_REQUEST',
    payload: request
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter
  });
  