import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../actions/index';
import UserList from './UserList';

class SearchUsers extends Component{
  state = {
    term: ''
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (e) =>{
    e.preventDefault();
    this.props.fetchDetail(this.state.term);
    this.setState({ term: '' });
  }


  render(){
    return(
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
              placeholder="Enter the username"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
               <button type="submit" className="btn btn-primary">Search</button>
            </span>
          </form>
          <UserList />
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchDetail: (term) => {dispatch(fetchDetail(term))}
  }
}

export default connect(null, mapDispatchToProps)(SearchUsers);