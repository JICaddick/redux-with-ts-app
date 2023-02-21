import React from 'react';
import './App.css';
import {  
  Routes, 
  Route,
  Link,
} from "react-router-dom";
import PostsList from './posts/PostsList'

function App() {
  return (
    <div className="App">
      <h1>React Redux App</h1>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/postsList">Posts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <>
          <Route
            path="/"
            exact
            element={<h1>Home</h1>}
          />
          {/* DIS ROUTE RONG */}
          <Route 
            path="/postsList"
            element={<PostsList />}
          />
          </>
        </Routes>
      </div>
    </div>
  );
}

export default App;