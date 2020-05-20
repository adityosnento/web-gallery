import React from "react";
import { Link } from "react-router-dom";

const DropDownMenu = props => {
  const tags = props.tags.split(" ");
  return (
    <nav className="photo-tags">
      <nav className="tag">Tags</nav>
      <ul className="drop-down-tags transition shadow">
        {tags[0] !== "" ? (
          tags.map(tag => (
            <li key={tag}>
              <Link to={"/tags/" + tag}>{tag}</Link>
            </li>
          ))
        ) : (
          <li>no tags</li>
        )}
      </ul>
    </nav>
  );
};

export default DropDownMenu;
