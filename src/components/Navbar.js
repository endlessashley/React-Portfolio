import React from 'react';


function Navbar({ currentPage, handlePageChange }) {
  return (
      <nav className="container-fluid">
          <div className = "col-md-4 col-xs-12 text-center">
            <button type="button" class="btn">
                <a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'btn active' : 'btn'}
                >About</a>
            </button>
          </div>

          <div className = "col-md-4 col-xs-12 text-center">
            <button type="button" class="btn">
                <a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'btn active' : 'btn'}
                >Portfolio</a>
            </button>
          </div>

          <div className = "col-md-4 col-xs-12 text-center">
            <button type="button" class="btn">
                <a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'btn active' : 'btn'}
                >Resume</a>
            </button>
          </div>

          <div className = "col-md-4 col-xs-12 text-center">
            <button type="button" class="btn">
                <a href="#skills"
                    onClick={() => handlePageChange('Skills')}
                    className={currentPage === 'Skills' ? 'btn active' : 'btn'}
                >Skills</a>
            </button>
          </div>

          <div className = "col-md-4 col-xs-12 text-center">
            <button type="button" class="btn">
                <a href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'btn active' : 'btn'}
                >Contact</a>
            </button>
          </div>
        </nav>
  );
}


export default Navbar;