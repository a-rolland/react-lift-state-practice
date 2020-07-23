import React from 'react';
import Labels from './Labels'
 
class RedLabel extends Labels{
  constructor(props){
    super(props);
    this.className = this.className + ' red-label';
  }
}

export default RedLabel;