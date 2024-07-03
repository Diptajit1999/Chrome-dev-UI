// src/components/Filter.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField label="Filter" onChange={handleFilterChange} />
  );
};

export default Filter;
