import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
   <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <a className="navbar-brand" href="/search">
        Search
      </a>
      </li>
      <li class="nav-item active">
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
      </li>
     </ul>
     </div>
    </nav>
  );
}

export default Nav;
