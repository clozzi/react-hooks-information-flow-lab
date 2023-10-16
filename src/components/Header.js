import React from "react";

function Header({ onDarkModeClick }) {
    return (
    <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>Mode
      {/* {isDarkMode ? "Dark" : "Light"} Mode */}
    </button>
  </header>
    )
}

export default Header