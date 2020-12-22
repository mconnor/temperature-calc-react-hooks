import React, { useState, useEffect } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import './Calculator.css';

type convertFunc = (t: number) => number;

const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const toFahrenheit = (celsius) => celsius * 9 / 5 + 32;

const convertFunc = (temperature: number, _convert: convertFunc) =>
    Math.round(_convert(temperature));

const Calculator: React.FC = () => {
    const [celsius, setCelsius] = useState<number | undefined>();
    const [fahrenheit, setFahrenheit] = useState<number | undefined>();
    useEffect(
        () => {
            if (celsius) setFahrenheit(convertFunc(celsius, toFahrenheit))
        },
        [celsius]
    );

    useEffect(
        () => {
            if (fahrenheit) setCelsius(convertFunc(fahrenheit, toCelsius))
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
            {<BoilingVerdict celsius={celsius} />}
        </div>
    );
}

export default Calculator;
