import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import { SidebarContainer } from './Sidebar';
import { ActiveChat } from './ActiveChat';
import { logout, fetchConversations } from '../store/utils/thunkCreators';
import { clearOnLogout } from '../store/index';

const styles = {
  root: {
    height: '97vh',
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const { fetchConversations } = this.state;
    fetchConversations();
  }

  componentDidUpdate(prevProps) {
    const { user: id } = this.props;
    const { user: { id: prevId } } = prevProps;
    if (id !== prevId) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  handleLogout = async () => {
    const { logout, user: { id } } = this.props;
    await logout(id);
  };

  render() {
    const { classes, user: { id } } = this.props;
    const { isLoggedIn } = this.state;
    if (!id) {
      // If we were previously logged in, redirect to login instead of register
      if (isLoggedIn) return <Redirect to="/login" />;
      return <Redirect to="/register" />;
    }
    return (
      <>
        {' '}
        {/* logout button will eventually be in a dropdown next to username */}
        {' '}
        <Button className={classes.logout} onClick={this.handleLogout}>
          Logout
          {' '}
        </Button>
        {' '}
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <SidebarContainer />
          <ActiveChat />
        </Grid>
        {' '}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  conversations: state.conversations,
});

const mapDispatchToProps = dispatch => ({
  logout: id => {
    dispatch(logout(id));
    dispatch(clearOnLogout());
  },
  fetchConversations: () => {
    dispatch(fetchConversations());
  },
});

Home.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Home));
