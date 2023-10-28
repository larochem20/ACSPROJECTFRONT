import React, { useState, useEffect } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Course } from "../../../api";

import "./HomeCourses.scss";
import logo  from "../../../assets/png/cursosimg.png";

const courseController = new Course();

export function HomeCourses() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ limit: 6 });
        setCourses(response.docs);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Container className="home-courses">
      <h2>Aprende y mejora tus habilidades</h2>

      <div className="home-courses__all-courses">
        {map(courses, (course) => (
          <a key={course._id} href={course.url} target="_blank" rel="noreferrer">
            <Image src={logo} alt="Logo" />
            <div>
              <span>{course.title}</span>
              <span>{course.description}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="home-courses__more">
        <Button as={Link} to="#" primary>
          Proximamente más cursos...
        </Button>
      </div>
    </Container>
  );
}
