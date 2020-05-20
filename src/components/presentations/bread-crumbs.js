import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../icons/home-icon.svg";

const BreadCrumbs = props => {
  return (
    <div className="bread-crumbs transition">
      <h3>
        <Link to="/">
          <img src={HomeIcon} alt="Home" className="home-icon transition" />
        </Link>
        {props.message}
      </h3>
    </div>
  );
};

export default BreadCrumbs;
