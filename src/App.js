import React from 'react';
import './App.css';
import {  
  Routes, 
  Route 
} from "react-router-dom";
// import { Navbar } from './app/Navbar.js'
// import { PostsList } from './features/posts/PostsList.js';

const About = () => <h1>About Page</h1>;

function App() {
  return (
    <div className="App">
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