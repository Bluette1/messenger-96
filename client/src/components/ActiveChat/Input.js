import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FilledInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { postMessage } from '../../store/utils/thunkCreators';

const styles = {
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo,
    // so that the other user will have access to username,
    // profile pic, etc.
    const {
      otherUser: { id }, conversationId, user, postMessage,
    } = this.props;
    const reqBody = {
      text: event.target.text.value,
      recipientId: id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    this.setState({
      text: '',
    });
  };

  render() {
    const { classes } = this.props;
    const { text } = this.state;
    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            classes={{ root: classes.input }}
            disableUnderline
            placeholder="Type something..."
            value={text}
            name="text"
            onChange={this.handleChange}
          />
          {' '}
        </FormControl>
        {' '}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  conversations: state.conversations,
});

const mapDispatchToProps = dispatch => ({
  postMessage: message => {
    dispatch(postMessage(message));
  },
});

Input.propTypes = {
  conversationId: PropTypes.string.isRequired,
  postMessage: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  otherUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Input));
