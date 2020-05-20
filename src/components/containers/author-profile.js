import React, { Component } from "react";
import { connect } from "react-redux";
import getProfile from "../../store/actions/get-profile-info-action";
import BreadCrumbs from "../presentations/bread-crumbs";
import AvatarImage from "../icons/profile-icon.svg";

class Author extends Component {
  componentDidMount() {
    this.props.getProfile2(this.props.pageID);
  }
  render() {
    return (
      <div className="container">
        <BreadCrumbs message={"Profile page"} />
        <div>
          <div className="row">
            <div className="col-12 ">
              <div className="container">
                <h3>
                  <img src={AvatarImage} alt="Avatar" className="avatar-icon" />
                  {this.props.profile.first_name} {this.props.profile.last_name}
                </h3>
                <p>Bio : {this.props.profile.profile_description} ...</p>
                <p>From : {this.props.profile.country} ...</p>
                <p>Instagram : {this.props.profile.instagram} ...</p>
                <p>User id : {this.props.pageID}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pageID: ownProps.match.params.id,
    profile: state.profile || {},
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile2: data => dispatch(getProfile(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
