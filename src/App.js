import './App.css';
import Date from './components/DateTime/DateTime';
import Login from './components/Login/Login';
import Video from './components/Video/Video';
function App() {
  return (
    <div className="App">
        <header className="header">
          <nav>
            <ul>
              <li>Login Component</li>
              <li>Video</li>
              <li>Date</li>
            </ul>
          </nav>

        </header>
        {/* <Login/> */}
        {/* <Video /> */}
        <Date />
    </div>
  );
}

export default App;
