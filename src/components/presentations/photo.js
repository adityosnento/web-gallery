import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./tags-dropdown-menu";

const Photo = props => {
  const photo = props.photo;
  const src = props.coverStyle === "list" ? photo.url_q : photo.url_l;
  return (
    <div className={"photo transition shadow " + props.coverStyle}>
      <div className="featured transition shadow">
        <Link to={"/gallery/" + photo.id}>
          <img src={src} alt="loading..." className="featured-image" />
        </Link>
        <div className="photo-views shadow">{photo.views} views</div>
      </div>
      <div className="photo-detail">
        <div className="title">
          <h4>
            <Link to={"/gallery/" + photo.id} className="photo-title">
              {photo.title}
            </Link>
            <div>
            <div className="photo-by">by</div>
            <Link to={"/author/" + photo.owner} className="photo-description">
              {photo.ownername}
            </Link>
            </div>
          </h4>
          <br />
        </div>
        <div className="detail">{photo.description._content}...</div>
        <div />
        <div className="tags">
          <DropDownMenu tags={photo.tags} />
        </div>
      </div>
    </div>
  );
};
export default Photo;
