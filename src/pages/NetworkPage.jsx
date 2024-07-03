import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const NetworkPage = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);

  const handleClick = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response);
      // const data = await response.json();
      // setData(data);
      // console.log(data);
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '10vh',
        gap: 2
      }}
    >
      <TextField 
        type="text" 
        placeholder="Input URL" 
        onChange={(e) => setUrl(e.target.value)} 
        value={url} 
        variant="outlined"
        sx={{ width: '300px' }}
      />
      <Button 
        onClick={handleClick}
        variant="contained"
        color="primary"
        sx={{ width: '300px' }}
      >
        Search
      </Button>
    </Box>
  );
}

export default NetworkPage;
