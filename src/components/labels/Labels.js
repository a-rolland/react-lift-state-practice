import React, { Component } from 'react';
 
class Labels extends Component{
    constructor(props){
      super(props);
      this.className="plain-label";
    }
     render(){
       return <span className={`${this.className} ${this.props.color}-label`}>
          {this.props.children} 
        </span>
     }
}

export default Labels