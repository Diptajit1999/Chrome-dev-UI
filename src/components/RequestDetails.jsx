// src/components/RequestDetails.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

const RequestDetails = ({ selectedRequestId }) => {
  const request = useSelector(state => state.requests.requests.find(req => req.id === selectedRequestId));
console.log(request)
  if (!request) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Request Details</Typography>
        <Typography variant="body1">URL: {request.url}</Typography>
        <Typography variant="body1">Method: {request.method}</Typography>
        <Typography variant="body1">Status: {request.status}</Typography>
        {/* Add more details as needed */}
      </CardContent>
    </Card>
  );
};

export default RequestDetails;
