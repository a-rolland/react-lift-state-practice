import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput ';
import { tryConvert, toCelsius, toFahrenheit } from './ConversionFunctions';
 
const Calculator = props => {
  
    const initialState = {
        temperature: '',
        scale: 'c'
    }

    const [state, setState] = useState(initialState)
 
    // const handleChange = (e) => {
    //     const { value } = e.target
    //     setState(state => {
    //         console.log('state is: ', state.temperature)
    //         return ({temperature: value})
    //     })
    // }

    const handleCelsiusChange = (temperature) => {
        setState({scale: 'c', temperature});
      }
     
    const handleFahrenheitChange = (temperature) => {
        setState({scale: 'f', temperature});
    }

    const scale = state.scale;
    const temperature = state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <fieldset>
            <TemperatureInput   
                scale="c"
                temperature={celsius}
                onTemperatureChange={temperature => handleCelsiusChange(temperature)} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={temperature => handleFahrenheitChange(temperature)} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    )
}
 
export default Calculator;