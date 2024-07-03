import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const DevUi = () => {
  const [filter, setFilter] = useState('');
  const [invert, setInvert] = useState(false);
  const [hideDataUrls, setHideDataUrls] = useState(false);
  const [hideExtensionUrls, setHideExtensionUrls] = useState(false);
  const [requestType, setRequestType] = useState('All');
  

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleInvertChange = (event) => {
    setInvert(event.target.checked);
  };

  const handleHideDataUrlsChange = (event) => {
    setHideDataUrls(event.target.checked);
  };

  const handleHideExtensionUrlsChange = (event) => {
    setHideExtensionUrls(event.target.checked);
  };

  const handleRequestTypeChange = (event) => {
    setRequestType(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
        <Toolbar sx={{ mb: 2 }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Elements
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Console
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Network
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Sources
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Preserve log
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Performance
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Disable cache
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            No throttling
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Memory
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Application
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Lighthouse
          </Typography>
        </Toolbar>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <TextField
            id="filter"
            label="Filter"
            value={filter}
            onChange={handleFilterChange}
            sx={{ mb: 2 }}
            variant="outlined"
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={invert}
                onChange={handleInvertChange}
              />
            }
            label="Invert"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideDataUrls}
                onChange={handleHideDataUrlsChange}
              />
            }
            label="Hide data URLs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideExtensionUrls}
                onChange={handleHideExtensionUrlsChange}
              />
            }
            label="Hide extension URLs"
          />
          <FormControl sx={{ mb: 2 }} variant="outlined" fullWidth>
            <InputLabel id="request-type-label">Request type</InputLabel>
            <Select
              labelId="request-type-label"
              id="request-type"
              value={requestType}
              onChange={handleRequestTypeChange}
              input={<OutlinedInput label="Request type" />}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Fetch/XHR">Fetch/XHR</MenuItem>
              <MenuItem value="Doc">Doc</MenuItem>
              <MenuItem value="CSS">CSS</MenuItem>
              <MenuItem value="JS">JS</MenuItem>
              <MenuItem value="Font">Font</MenuItem>
              <MenuItem value="Img">Img</MenuItem>
              <MenuItem value="Media">Media</MenuItem>
              <MenuItem value="Manifest">Manifest</MenuItem>
              <MenuItem value="WS">WS</MenuItem>
              <MenuItem value="Wasm">Wasm</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" sx={{ mt: 2 }} color="primary" fullWidth>
            Perform a request or hit %R to record the reload
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Learn more
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default DevUi;
