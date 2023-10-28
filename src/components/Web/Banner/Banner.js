import React from "react";
import { Container } from "semantic-ui-react";
import "./Banner.scss";

export function Banner() {
  return (
    <div className="banner">
      <Container>
        <h1>
        Explora nuestro océano de conocimientos <br /> y sumérgete en nuevas experiencias educativas.
        </h1>
        
        <h2>
        ¡Comienza tu viaje hacia el aprendizaje y el crecimiento aquí!"
        </h2>
      </Container>

      <div className="banner__dark" />
    </div>
  );
}
