import "./App.css";
import React, { useState } from 'react';
// import NetworkRequestList from './components/NetworkRequestList';
// import RequestDetails from './components/RequestDetails';
// import Filter from './components/Filter';
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { Container, Grid } from "@mui/material"
import NetworkPage from "./pages/NetworkPage";
import DevUi from "./pages/DevUI";
function App() {
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  return (
    <div className="App">
      {/* <Provider store={store}>
        <Container>
          <Filter />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <NetworkRequestList setSelectedRequestId={setSelectedRequestId} />
            </Grid>
            <Grid item xs={6}>
              <RequestDetails selectedRequestId={selectedRequestId} />
            </Grid>
          </Grid>
        </Container>
      </Provider> */}
      <NetworkPage/>
      <DevUi/>
    </div>
  );
}


export default App;
