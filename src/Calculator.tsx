import React, { useState, useEffect } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import './App.css';



type convertFunc = (t: number) => number;

const toCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9;
const toFahrenheit = (celsius: number): number => celsius * 9 / 5 + 32;

const  convertFunc = (temperature: number, _convert: convertFunc) => 
    Math.round(_convert(temperature) * 1000) /1000;

const Calculator: React.FC = () => {
    const [celsius, setCelsius] = useState();
    const [fahrenheit, setFahrenheit] = useState();

    useEffect(
        () => setFahrenheit(convertFunc(celsius, toFahrenheit)),
        [celsius]
    );

    useEffect(
        () => setCelsius(convertFunc(fahrenheit, toCelsius)),
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
