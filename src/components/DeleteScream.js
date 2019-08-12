import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import DeleteOutline from "@material-ui/icons/DeleteOutline";

import MyButton from "../util/MyButton";

import { connect } from "react-redux";
import { deleteScream } from "../redux/actions/dataActions";

const styles = {
  deleteButton: {
    left: "90%",
    top: "10%",
    position: "absolute"
  }
};

class DeleteScream extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteScream = () => {
    this.props.deleteScream(this.props.screamId);
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="delete"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Are you sure you want to delete?</DialogTitle>

          <DialogActions>
            <Button
              onClick={this.handleClose}
              color="primary"
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              onClick={this.deleteScream}
              color="secondary"
              variant="contained"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteScream.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired
};

export default connect(
  null,
  { deleteScream }
)(withStyles(styles)(DeleteScream));
