import React from 'react';



const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-Link' >
      <a href="/" style={{ textDecorationLine: "none" }}>Home</a>
       <a href="/addBook" style={{ textDecorationLine: "none" }} >Add Book</a>
      </div>
    </div>
  )
}

export default NavBar