import React from 'react';
import Labels from './Labels'
 
export class GreenLabel extends Labels{
  constructor(props){
    super(props);
    this.className = this.className + ' green-label';
  }
}
 
export class GreenLabelWithIcon extends GreenLabel {
  constructor(props){
    super(props);
  }
  render(){
    return <div>
          {super.render()}<span>♨️</span>
      </div>
  }
}