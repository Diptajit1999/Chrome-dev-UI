// src/components/NetworkRequestList.js

import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';

const NetworkRequestList = () => {
  const requests = useSelector(state => state.requests.requests);
console.log(requests)
  return (
    <List>
      {requests.length>0 && requests?.map((request, index) => (
        <ListItem key={index}>
          <ListItemText primary={request.url} secondary={request.method} />
        </ListItem>
      ))}
    </List>
  );
};

export default NetworkRequestList;
