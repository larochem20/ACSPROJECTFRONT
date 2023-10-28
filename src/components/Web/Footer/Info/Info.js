import React from "react";


import logo from "../../../../assets/png/logo.png";

import "./Info.scss";

export function Info() {
  return (
    <div className="footer-info">
          <img src={logo} alt="Logo" />
      <p>
        ¡Aprende lo mejor, con los mejores!
      </p>
    </div>
  );
}
