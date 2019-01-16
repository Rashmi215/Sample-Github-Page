import React, { Component } from 'react';
import axios from 'axios';
import RepoPage from './RepoPage';

class ProfilePage extends Component{
  state = {
    user: ''
  };

  componentDidMount(){
     const {username} = this.props.match.params;
     axios.get(`https://api.github.com/users/${username}`)
     .then(res => {
       //console.log(res);
       this.setState({ user: res.data });
     });
  }

  render(){
    const {user} = this.state;
    const {username} = this.props.match.params;
    return(
      <div className = 'container-fluid'>
        <div className = 'row'>

            <div className = 'col-sm-3' style = {{marginLeft:'150px', width:'250px'}}>
              <div style = {{marginTop:'50px'}}>
                <img src={user.avatar_url} alt="" style = {{borderRadius:'3%', height:'200px'}}/>
              </div>
              <div style={{marginTop:'20px'}}>
                 <h3 >{user.name}</h3>
                 <p className = 'font-weight-light'
                    style={{color:'grey', lineHeight: '0.3'}}>
                    {user.login}
                 </p>
                 <hr/>
              </div>
              <div style = {{ lineHeight: '1.7'}}>
                 <i className="fas fa-user-friends" />
                    <span> GitHub </span>
                 <br/>
                 <i className="fas fa-map-marker-alt" />
                    <span> {user.location}</span>
                 <br />
                 <i className="far fa-envelope" />
                    <a href = 'https://github.com/login'> sign in to view this email</a>
                 <br />
                 <i className="fas fa-link" />
                    <a href="https://blog.github.com"> https://blog.github.com</a>
              </div>
            </div>

            <div className = 'col'>
               <RepoPage username = {username}/>
            </div>

        </div>
      </div>

    );
  }
}

export default ProfilePage;
