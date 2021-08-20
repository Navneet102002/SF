import React from 'react'
import '../styles/styles.css';

function Dropdown(){
    return <div class="dropdown center">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#nogo">Action</a></li>
      <li><a class="dropdown-item" href="#nogo">Another action</a></li>
      <li><a class="dropdown-item" href="#nogo">Something else here</a></li>
    </ul>
  </div>
}

export default Dropdown;