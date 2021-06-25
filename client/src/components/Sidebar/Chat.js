import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { BadgeAvatar, ChatContent } from '.';
import { setActiveChat } from '../../store/activeConversation';

const styles = {
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
};

class Chat extends Component {
  handleClick = async conversation => {
    const { otherUser: { username } } = conversation;
    const { setActiveChat } = this.props;
    await setActiveChat(username);
  };

  render() {
    const { classes, conversation } = this.props;
    const { otherUser: { photoUrl, username, online } } = conversation;
    return (
      <Box
        onClick={() => this.handleClick(conversation)}
        className={classes.root}
      >
        <BadgeAvatar
          photoUrl={photoUrl}
          username={username}
          online={online}
          sidebar
        />
        <ChatContent conversation={conversation} />
        {' '}
      </Box>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setActiveChat: id => {
    dispatch(setActiveChat(id));
  },
});

Chat.propTypes = {
  conversation: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  setActiveChat: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Chat));
