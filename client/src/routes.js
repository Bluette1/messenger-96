import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from './store/utils/thunkCreators';
import Signup from './Signup';
import Login from './Login';
import { Home, SnackbarError } from './components';

const Routes = props => {
  const { user: { error, isFetchingUser }, fetchUser } = props;
  const [errorMessage, setErrorMessage] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (error) {
      // check to make sure error is what we expect, in case
      // we get an unexpected server error object
      if (typeof error === 'string') {
        setErrorMessage(error);
      } else {
        setErrorMessage('Internal Server Error. Please try again');
      }
      setSnackBarOpen(true);
    }
  }, [error]);

  if (isFetchingUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route
          exact
          path="/"
          render={props => (props.user?.id ? <Home /> : <Signup />)}
        />
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser() {
    dispatch(fetchUser());
  },
});

Routes.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
