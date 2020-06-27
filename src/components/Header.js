import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h2>Where in the World?</h2>
      <button href="#" onClick={() => props.modeSetter(!props.mode)}>
        <i className="fas fa-moon"></i>DarkMode
      </button>
    </div>
  );
};

export default Header;
