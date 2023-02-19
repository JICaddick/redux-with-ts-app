import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Navbar } from './app/Navbar.js'
import { PostsList } from './features/posts/PostsList.js';

// const About = () => <h1>About Page</h1>;

function App() {
  return (
    <Router>
    <div className="App">
          <Navbar />
          <Route
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            )}
          />
        {/* <Route path="/about" component={About} /> */}
    </div>
    </Router>
  );
}

export default App;
