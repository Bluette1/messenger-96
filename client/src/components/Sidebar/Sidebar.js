import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Search, Chat, CurrentUser } from './index';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 21,
    paddingRight: 21,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    letterSpacing: -0.29,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 15,
  },
}));

const Sidebar = props => {
  const classes = useStyles();
  const { handleChange, searchTerm, conversations } = props;

  return (
    <Box className={classes.root}>
      <CurrentUser />
      <Typography className={classes.title}> Chats </Typography>
      {' '}
      <Search handleChange={handleChange} />
      {' '}
      {conversations
        .filter(conversation => conversation.otherUser.username.includes(searchTerm))
        .map(conversation => (
          <Chat
            conversation={conversation}
            key={conversation.otherUser.username}
          />
        ))}
      {' '}
    </Box>
  );
};

const mapStateToProps = state => ({
  conversations: state.conversations,
});

Sidebar.defaultProps = {
  conversations: {},
};
Sidebar.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.any),
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Sidebar);
