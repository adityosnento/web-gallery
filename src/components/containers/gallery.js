import React from "react";
import { connect } from "react-redux";
import BreadCrumbs from "../presentations/bread-crumbs";
import Photo from "../presentations/photo";

const Gallery = props => {
  return (
    <div className="container">
      <BreadCrumbs message="Photo info" />
      <div>
        <div className="row">
          <div className="col-12 ">
            <Photo
              key={props.photo.id}
              photo={props.photo}
              coverStyle="gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    pageID: id,
    photo: state.photo.find(photo => photo.id === id)
  };
};

export default connect(mapStateToProps)(Gallery);
