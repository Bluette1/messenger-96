import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FilledInput, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  filledInput: {
    height: 50,
    background: '#E9EEF9',
    borderRadius: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#99A9C4',
    letterSpacing: 0,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    '&::placeholder': {
      color: '#ADC0DE',
      opacity: 1,
    },
  },
};

class Search extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { handleChange, classes: { filledInput, input } } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            name="search"
            onChange={handleChange}
            classes={{ root: filledInput, input }}
            disableUnderline
            placeholder="Search"
            startAdornment={(
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )}
          />
          {' '}
        </FormControl>
        {' '}
      </form>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Search);
