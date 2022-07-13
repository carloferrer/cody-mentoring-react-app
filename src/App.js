import logo from './logo.svg';
import './App.css';

function App() {
  var someObject = require('./actinfo.json');

  var actOneWaypointObject = {
    actOneTown: someObject[1].town,
    actOneWaypoint: someObject[1].waypoint2,
  };

  console.table(actOneWaypointObject)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {actOneWaypointObject.actOneWaypoint}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
