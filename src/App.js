import React from 'react';
import './App.css';
import {  
  Routes, 
  Route,
  Link
} from "react-router-dom";
// import { Navbar } from './app/Navbar.js'
// import { PostsList } from './features/posts/PostsList.js';

const About = () => <h1>About Page</h1>;

function App() {
  return (
    <div className="App">
      <h1>React Redux App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/PostsList">PostsList</Link>
            </li> */}
          </ul>
        </nav>
      <Routes>
        {/* <Navbar /> */}
          <Route
            path="/"
            exact component={App}
          />
        <Route path="/about" component={About} />
        {/* <Route path="/PostsList" component={PostsList} /> */}
      </Routes>
    </div>
  );
}

export default App;