import React, { useState, useEffect } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import './App.css';

function toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number): number {
    return celsius * 9 / 5 + 32;
}

function tryConvert(temperature: number, convert: any) {
    const output = convert(temperature);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded;
}

const Calculator: React.FC = () => {
   // const [scale, setScale] = useState('c');

    const [celsius, setCelsius] = useState();
    const [fahrenheit, setFahrenheit] = useState();

    useEffect(
        () => {
            return setFahrenheit(tryConvert(celsius, toFahrenheit));
        },
        [celsius]
    );

    useEffect(
        () => {
            return setCelsius(tryConvert(fahrenheit, toCelsius));
        },
        [fahrenheit]
    );

    return (
        <div>
            <h1>Convert Temperatures - Simple React Hooks Demo</h1>
            <TemperatureInput 
                scale='c' 
                temperature={celsius} 
                onTemperatureChange={setCelsius} 
            />
            <TemperatureInput 
                scale='f' 
                temperature={fahrenheit} 
                onTemperatureChange={setFahrenheit} 
            />
            <BoilingVerdict celsius={celsius} />
        </div>
    );
}

export default Calculator;
