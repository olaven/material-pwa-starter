import React, { Component } from 'react';

import Layout from './Components/Layout'; 


class App extends Component {
  render() {
    return (
      <div>
        {/*
          Add top, menu and main as props to Layout.
          They should be react components.
          Top is in the top bar. 
          Menu is in the side menu. 
          Main is in the main window of app
        */}
        <Layout/> 
      </div>
    ); 
  }
}

export default App;
