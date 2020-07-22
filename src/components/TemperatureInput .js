import React, { useState } from 'react';
 
const TemperatureInput = props => {
  
    // const initialState = {
    //     temperature: ""
    // }

    // const [state, setState] = useState(initialState)
  
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
        props.onTemperatureChange(value)
    }
 
    const temperature = props.temperature;
    const scale = props.scale;
 
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={e => handleChange(e)} />
      </fieldset>
    );
}
 
export default TemperatureInput;