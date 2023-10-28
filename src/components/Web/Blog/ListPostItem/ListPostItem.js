import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "./ListPostItem.scss";
import logo  from "../../../../assets/jpg/blogs.jpg";


export function ListPostItem(props) {
  const { post } = props;
  const date = new Date(post.created_at);

  return (
    <Link className="list-post-item" to={`/blog/${post.path}`}>
      <img src={logo} alt="Logo" />
      <h2>{post.title}</h2>
      <span>
        {DateTime.fromISO(date.toISOString())
          .setLocale("es")
          .toFormat("dd 'de' LLLL 'del' yyyy")}
      </span>
    </Link>
  );
}
