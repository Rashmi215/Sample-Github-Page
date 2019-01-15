import React, {Component} from 'react';
import axios from 'axios';

class RepoPage extends Component{
  state = {
    repos: []
  };

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.props.username}/repos`)
      .then(res => {
        console.log(res);
        this.setState({ repos: res.data});
      });
  }

   render(){
     const {repos} = this.state;
     return(
       <div className = 'repo-component'>
          {repos.map(item => {
            return(
              <li className="list-group-item borderless" key={item.id}>
                 <h5 style = {{color:'#0366D6'}}>{item.name}</h5>
                 <p>{item.description}</p>
                 <span>
                   <i className="fas fa-circle fa-xs"/> {item.language}
                   
                 </span>
              </li>
            );
          })}
       </div>
     );
   }
}

export default RepoPage;