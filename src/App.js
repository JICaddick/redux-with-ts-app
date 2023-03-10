import React from 'react';
import './App.css';
import {  
  Routes, 
  Route,
  Link,
} from "react-router-dom";
import PostsList from './features/posts/PostsList'
import { Navbar } from './app/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={<h1>Home</h1>}
          />
          <Route 
            path="/postsList"
            element={<PostsList />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;