import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Sidebar } from './index';
import { searchUsers } from '../../store/utils/thunkCreators';
import { clearSearchedUsers } from '../../store/conversations';

const SidebarContainer = props => {
  const { searchUsers, clearSearchedUsers } = props;

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = async event => {
    if (event.target.value === '') {
      // clear searched convos from redux store
      clearSearchedUsers();
      setSearchTerm('');
      return;
    }
    if (searchTerm.includes(event.target.value)) {
      // if new value is included in search term,
      // we don 't need to make another API call,
      // just need to set the search term value so the conversations
      // can be filtered in the rendering
      setSearchTerm(event.target.value);
      return;
    }
    await searchUsers(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <Sidebar
      handleChange={handleChange}
      searchTerm={searchTerm}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  searchUsers: username => {
    dispatch(searchUsers(username));
  },
  clearSearchedUsers: () => {
    dispatch(clearSearchedUsers());
  },
});

SidebarContainer.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearSearchedUsers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SidebarContainer);
