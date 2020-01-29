import React, { useState, useEffect } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import './App.css';

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function Calculator() {
	
	const [ scale, setScale ] = useState('');

	const [ celsius, setCelsius ] = useState('');

	const [ fahrenheit, setFahrenheit ] = useState('');

	useEffect(
		() => {
			return setFahrenheit(tryConvert(celsius, toFahrenheit));
		},
		[ celsius ]
	);

	useEffect(
		() => {
			return setCelsius(tryConvert(fahrenheit, toCelsius));
		},
		[ fahrenheit ]
	);


	const handleCelsiusChange = (val) => {
		setScale('c');
		setCelsius(val);
	};

	const handleFahrenheitChange = (val) => {
		setScale('f');
		setFahrenheit(val);
	};

	return (
		<div>
			<h1>Convert Temperatures - Simple React Hooks Demo</h1>
			<TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={handleCelsiusChange} />
			<TemperatureInput scale={'f'} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
			<BoilingVerdict celsius={parseFloat(celsius)} />
            <p>Code by <a href="mailto:mike@cloudswing.info">Mike Connor</a> available on <a href="https://github.com/mconnor/temperature-calc-react-hooks">GitHub</a></p>
		</div>
        
	);
}

export default Calculator;
