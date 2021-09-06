import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Date from './components/DateTime/DateTime';
import Login from './components/Login/Login';
import Video from './components/Video/Video';
function App() {
  return (
    <Router>
          <div className="App">
        <header className="header">
          <nav>
          <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/date">Date</a></li>
          <li><a href="/video">Video</a></li>
          </ul>
          </nav>
        </header>
            <Switch>
              <Route path="/login" >
                <Login />
              </Route>
              <Route path="/video" >
                <Video />
              </Route>
              <Route path="/date" >
                <Date />
              </Route>
            </Switch>
              {/* <Login/> */}
              {/* <Video /> */}
              {/* <Date /> */}
          </div>
      </Router>
  );
}

export default App;
