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
	console.log('tryConvert ' + temperature);
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function Calculator() {
	//const [scale, setScale] = useState('c')
	// const [temperature, setTemp] = useState('');
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

	useEffect(
		() => {
			return console.log('swtich to ' + scale);
		},
		[ scale ]
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
			<h1>Convert Temperatures</h1>
			<TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={handleCelsiusChange} />
			<TemperatureInput scale={'f'} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	);
}

export default Calculator;
