import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import MyButton from "../../util/MyButton";

import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../../redux/actions/dataActions";

class LikeButton extends Component {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(like => like.screamId === this.props.screamId)
    ) {
      return true;
    } else return false;
  };

  likeScream = () => {
    this.props.likeScream(this.props.screamId);
  };

  unlikeScream = () => {
    this.props.unlikeScream(this.props.screamId);
  };

  render() {
    const { authenticated } = this.props.user;

    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedScream() ? (
      <MyButton tip="unlike" onClick={this.unlikeScream}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="like" onClick={this.likeScream}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeScream,
  unlikeScream
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LikeButton);
