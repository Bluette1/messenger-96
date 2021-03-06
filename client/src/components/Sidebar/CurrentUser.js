import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { BadgeAvatar } from './index';

const useStyles = makeStyles(() => ({
  root: {
    height: 44,
    marginTop: 23,
    marginLeft: 6,
    display: 'flex',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  username: {
    letterSpacing: -0.23,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 17,
  },
  ellipsis: {
    color: '#95A7C4',
    marginRight: 24,
    opacity: 0.5,
  },
}));

const CurrentUser = props => {
  const classes = useStyles();

  const { user } = props;

  return (
    <Box className={classes.root}>
      <BadgeAvatar photoUrl={user.photoUrl} online />
      <Box className={classes.subContainer}>
        <Typography className={classes.username}>
          {' '}
          {user.username}
          {' '}
        </Typography>
        {' '}
        <MoreHorizIcon classes={{ root: classes.ellipsis }} />
        {' '}
      </Box>
      {' '}
    </Box>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});
CurrentUser.defaultProps = {
  user: {},
};

CurrentUser.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps)(CurrentUser);
