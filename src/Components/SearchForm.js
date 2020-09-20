import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

export default withRouter (class SearchForm extends Component {
  
  state = {
    searchText: ''
  };
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
    let searchQuery = this.state.searchText;
    let path = `/search/${searchQuery}`;
    this.props.history.push(path);
  };
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input} 
               placeholder="Search..." />
        <button type="submit" id="submit"><SearchIcon className="search-form button" style={{ color: 'white' }} fontSize="large" /></button>
      </form>      
    );
  }
})