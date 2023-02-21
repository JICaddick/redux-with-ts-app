import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
          <nav>
            <div className='navLinks'>
                  <Link to="/">Home</Link>
                  <Link to="/postsList">Posts</Link>
            </div>
          </nav>
      </section>
    </nav>
  )
}