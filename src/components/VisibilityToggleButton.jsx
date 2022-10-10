import React, { useState } from "react";
import "../css/VisibilityToggleButton.css";
import "../css/VisibilityToggle.css";

function VisibilityToggleButton() {
  const [isVisible, setVisibility] = useState(false);

  const triggerToggle = () => {
    setVisibility(!isVisible);
  };

  return (
    <button
      onClick={triggerToggle}
      className={`Button ${isVisible ? "Invisible" : "Visible"}`}
    ></button>
  );
}

export default VisibilityToggleButton;

// import visibilityIcon from "../svg/icons/visibility.svg";

/* <button className="Button Visible">
  <img src={visibilityIcon} alt="visibility icon" />
</button> */
