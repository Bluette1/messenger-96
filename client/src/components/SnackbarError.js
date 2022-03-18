import React from 'react';
import { Button, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  snackbar: {
    backgroundColor: 'red',
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
  },
}));

const SnackbarError = props => {
  const { setSnackBarOpen, snackBarOpen, errorMessage } = props;
  const classes = useStyles();
  return (
    <Snackbar
      open={snackBarOpen}
      onClose={() => setSnackBarOpen(false)}
      message={
        errorMessage || 'Sorry, an error occured. Please try again'
      }
      action={(
        <>
          <Button
            className={classes.icon}
            size="small"
            onClick={() => setSnackBarOpen(false)}
          >
            <Close color="secondary" />
          </Button>
          {' '}
        </>
      )}
      ContentProps={{
        classes: {
          root: classes.snackbar,
        },
      }}
    />
  );
};

SnackbarError.propTypes = {
  snackBarOpen: PropTypes.bool.isRequired,
  setSnackBarOpen: PropTypes.func.isRequired,
  errorMessage: PropTypes.objectOf.isRequired,
};
export default SnackbarError;
