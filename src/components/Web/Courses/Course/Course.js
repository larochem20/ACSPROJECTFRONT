import React from "react";
import { Image, Button, Rating } from "semantic-ui-react";

import "./Course.scss";
import logo  from "../../../../assets/png/cursosimg.png";

export function Course(props) {
  const { course } = props;

  return (
    <div className="course">
      <Image src={logo} alt="Logo" />

      <div className="course__info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <Button primary fluid target="_blank">
          ENTRAR EN EL CURSO
        </Button>

        <div className="course__info-footer">
          <span>{course.price} €</span>
          <Rating
            icon="star"
            defaultRating={course.score}
            maxRating={5}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
