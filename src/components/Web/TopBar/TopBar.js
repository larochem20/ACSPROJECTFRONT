import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { map } from "lodash";

import { Menu } from "../../../api";

import "./TopBar.scss";
import logo  from "../../../assets/png/logo.png";


const menuController = new Menu();

export function TopBar() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await menuController.getMenu(true);
        setMenu(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="top-bar">
      <Container>
        <div className="top-bar__left">
          <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
          </Link>

          <div className="menu">
            {map(menu, (item) => (
              <a key={item._id} href={item.path}>
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="lema">
           <p> "La búsqueda del conocimiento es un camino que, al igual que los pingüinos en la nieve, deja huellas profundas." </p>
        </div>
      </Container>
    </div>
  );
}
