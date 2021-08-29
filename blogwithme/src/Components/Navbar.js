import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top">
                <a className="navbar-brand" href="{}">BlogWithME</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="mailto:obiemmy123@gmail.com">
                        <i className="fas fa-mail-bulk fa-2x" style={{color: "#fff"}}></i>
                      </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="{https://www.linkedin.com/in/emmanuelobi20/}">
                            <i className="fab fa-linkedin fa-2x" style={{color: "#fff"}}></i>
                          </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="{https://github.com/emmanuelobi}">
                            <i className="fab fa-github fa-2x" style={{color: "#fff"}}></i>
                          </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="{}">
                            <i className="fab fa-twitter-square fa-2x" style={{color: "#fff"}}></i>
                          </a>
                    </li>
                  </ul>
                </div>
              </nav>
        </div>
    )
}

export default Navbar
