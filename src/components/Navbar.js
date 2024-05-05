import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  let width = {
    width: "1075px",
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={props.mode}
      >
        <div className="container-fluid" style={width}>
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn btn-outline-${
                  props.mode === "light" ? "secondary" : "light"
                }`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className={`mx-2 form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            Enable {props.mode === "light" ? "dark" : "light"} Mode
          </label>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  // If 'isRequired' is used and we don't give title then it throws error
  title: PropTypes.string.isRequired,
};

// It runs when we are not passing any title. It will exported default.
// Navbar.defaultProps = {
//   title: "Title",
// };
