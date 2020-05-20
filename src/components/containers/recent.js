//@ts-check
import React, { Component } from "react";
import { connect } from "react-redux";
import searchPhotos from "../../store/actions/search-photos-action";
import updateResultPage from "../../store/actions/update-result-action";
import BreadCrumbs from "../presentations/bread-crumbs";
import Loading from "../presentations/loading-bar";
import Photo from "../presentations/photo";
import { handleOnScroll } from "../utilities/functions";

class RecentPhotos extends Component {
  state = {
    updating: 0,
    search: {
      method: 0,
      text: "",
      tags: "",
      page: this.props.page || 1
    }
  };

  infiniteScroll() {
    if (handleOnScroll()) {
      this.setState({ ...this.state, updating: 1 });
      this.props.updatePage(this.state.search);
    }
  }

  resetInfiniteScroll() {
    this.setState({ ...this.state, updating: 0 });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {});
    this.setState({ ...this.state, updating: 1 });
  }

  componentDidMount() {
    this.props.getSearchResult();
    window.onscroll = () => {
      if (!this.state.updating) return this.infiniteScroll();
    };
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.resetInfiniteScroll();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.pageID) {
      this.props.getSearchResult();
    }
  }
  render() {
    //handle connection error
    const connectionError = this.props.connectionError
      ? this.props.errorMessage
      : this.props.loadingMessage;

    //handle photos list
    const result = this.props.result || [];

    const recentPhotoList = result.length ? (
      result.map(photo => {
        return (
          <div
            key={photo.id}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 transition"
          >
            <Photo photo={photo} coverStyle="list" />
          </div>
        );
      })
    ) : (
      <div className="col-md-4">{connectionError}</div>
    );
    return (
      <div className="container">
        <BreadCrumbs message="Recent photos" />
        <div className="row">{recentPhotoList}</div>
        <Loading />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.photo,
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage,
    page: state.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePage: () => dispatch(updateResultPage()),
    getSearchResult: () => dispatch(searchPhotos())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentPhotos);
