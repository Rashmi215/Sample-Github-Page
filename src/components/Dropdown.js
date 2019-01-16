import React, { Component} from 'react';

class Dropdown extends Component{
  state = {
    display: false
  };



  clickItem = (param) =>{

  }

  render(){
    const {display} = this.state;
    return (
      <div className = 'dropdown' style = {{paddingBottom:'10px'}}>
        <button className="btn" onClick = {this.toggleMenu}>Sort By <i className="fas fa-sort-down"/></button>
        { display ? (
          <ul className = 'list-group group-style'>
             <li className = 'list-group-item li-style-top'>Select type:</li>
             <li className = 'list-group-item li-style'
                 onClick = {() => this.clickItem(full_name)}>
                 Full Name
             </li>
             <li className = 'list-group-item li-style'>Created Date</li>
             <li className = 'list-group-item li-style'>Updated Date</li>
             <li className = 'list-group-item li-style'>Pushed Date</li>
          </ul>
        ) : null}
      </div>
    );
  };
}

export default Dropdown;