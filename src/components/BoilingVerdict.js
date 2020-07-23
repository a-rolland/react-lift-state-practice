import React from 'react';
// import {GreenLabel, GreenLabelWithIcon} from './labels/GreenLabel';
import Labels from './labels/Labels';
 
const boilingVerdict = props => {
    if (props.celsius >= 200) {
        // return <GreenLabelWithIcon>It's over 200 Celsius, it's boooiiiilingg! </GreenLabelWithIcon>
        return <Labels color={props.color}>The water would boil.</Labels>;
    } else if (props.celsius >= 100) {
        // return <GreenLabel>The water would boil.</GreenLabel>;
        return <Labels color={props.color}>The water would boil.</Labels>;
    } else {
        // return <RedLabel>The water would not boil.</RedLabel>;
        return <Labels color={props.color}>The water would not boil.</Labels>;
    }
}
 
export default boilingVerdict;