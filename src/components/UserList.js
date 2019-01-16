import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserList extends Component{

  renderList(){
       let {users} = this.props;
       let returnArray = [];
       for(let key in users){
         users[key].map(user =>{
           returnArray.push(
            <li className="list-group-item borderless" key={user.id}>
               <span> <img src={user.avatar_url} style={{ width: '70px' }} alt = ''/></span>
                <Link to={`/user/${user.login}`}> { user.login }</Link>
            </li>
           );
         });
       }
       return returnArray;
    //     let lists = users.items.map(user =>{
    //        let active = user;
    //        return active;
    //    })
    //    this.setState({ lists: lists });
    // }
  }

  render(){
    //const {lists} = this.state;
    return (
      <div className = 'user-detail'>
         <ul className = "list-group">
           { this.renderList() }
         </ul>
      </div>

    );
  }
}

const mapStateToProps = (state) =>{
  return{
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList);