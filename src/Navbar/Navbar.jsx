import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Celluloid 
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links cursor-pointer">
    <a>Popular</a>
    <a>Top 10</a>
    <a>Browse on Language</a>
    <a>Tv Shows</a>
    <a>LOGIN</a>
  </div>
</div>
    </div>
  )
}

export default Navbar