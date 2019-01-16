import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class RepoPage extends Component{
  state = {
    repos: [],
    display: false
  };

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.props.username}/repos`)
      .then(res => {
        console.log(res);
        this.setState({ repos: res.data});
      });
  }

  toggleMenu = () => {
    this.setState({ display: !this.state.display });
  }

  clickedName = (e) =>{
    axios.get(`https://api.github.com/users/${this.props.username}/repos?sort=full_name`)
       .then(res => {
         this.setState({ repos: res.data, display: false});
       });
  }

  clickedCreatedDate = (e) =>{
    axios.get(`https://api.github.com/users/${this.props.username}/repos?sort=created`)
       .then(res => {
         this.setState({ repos: res.data, display: false});
       });
  }

  clickedUpdatedDate = (e) =>{
    axios.get(`https://api.github.com/users/${this.props.username}/repos?sort=updated`)
       .then(res => {
         this.setState({ repos: res.data, display: false});
       });
  }

  clickedPushedDate = (e) =>{
    axios.get(`https://api.github.com/users/${this.props.username}/repos?sort=pushed`)
       .then(res => {
         this.setState({ repos: res.data, display: false});
       });
  }

   render(){
     const {repos, display} = this.state;
     return(
       <div className = 'repo-component' style = {{marginTop:'50px'}}>


         <div className = 'dropdown' style = {{paddingBottom:'10px'}}>
           <button className="btn" onClick = {this.toggleMenu}>Sort By <i className="fas fa-sort-down"/></button>
           { display ? (
             <ul className = 'list-group group-style'>
                <li className = 'list-group-item li-style-top'>Select type:</li>
                <li className = 'list-group-item li-style'
                    onClick = {this.clickedName}>Full Name
                </li>
                <li className = 'list-group-item li-style'
                    onClick = {this.clickedCreatedDate}>Created Date
                </li>
                <li className = 'list-group-item li-style'
                    onClick = {this.clickedUpdatedDate}>Updated Date
                </li>
                <li className = 'list-group-item li-style'
                    onClick = {this.clickedPushedDate}>Pushed Date
                </li>
             </ul>
           ) : null}
         </div>



          {repos.map(item => {
            return(
              <li className="list-group-item borderless" key={item.id}>
                 <h5 style = {{color:'#0366D6'}}>{item.name}</h5>
                 <p>{item.description}</p>
                 <span>
                   <i className="fas fa-circle fa-xs"/> {item.language}
                   <i className="fas fa-star fa-xs icon-spacing"/> {item.stargazers_count}
                   <i className="fas fa-code-branch fa-xs icon-spacing"/> {item.forks_count}
                   <div style = {{display:'inline-block'}}
                        className = 'icon-spacing'>Updated at {moment(item.updated_at).calendar()}</div>
                 </span>
              </li>
            );
          })}
       </div>
     );
   }
}

export default RepoPage;