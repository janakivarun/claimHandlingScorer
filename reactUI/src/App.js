import { Typography } from '@material-ui/core';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Typography variant="h2" align="center" color="primary">
        <u>Claim Handling Scorer</u>
      </Typography>
      <hr></hr>
      <Dashboard />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
