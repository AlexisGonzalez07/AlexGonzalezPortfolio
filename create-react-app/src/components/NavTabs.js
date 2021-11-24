import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="container-fluid">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'  
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}><span className="sr-only"></span>Home</a>
                </li>
                <li className="nav-item">
                    <a href="#My-Work"
          onClick={() => handlePageChange('ProjectCards')}
          // Check to see if the currentPage is `ProjectCards`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'ProjectCards' ? 'nav-link active' : 'nav-link'}>My Work</a>
                </li>
                <li className="nav-item">
                    <a href="#contact-me"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                </li>
                <li className="nav-item">
                    <a target="_blank" href="./assets/files/May2021-Resume.pdf" onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Resume</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
  );
}

export default NavTabs;
