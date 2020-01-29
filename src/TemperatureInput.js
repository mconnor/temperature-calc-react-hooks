import React from 'react'


const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};


const TemperatureInput = ({temperature, onTemperatureChange, scale}) => {

    
    const handleChange = (e) => {
		// Before: this.setState({temperature: e.target.value});
		onTemperatureChange(e.target.value);
	}
    return (
        <div>
            <fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={handleChange} type="number" />
			</fieldset>
        </div>
    )
}

export default  TemperatureInput