import React from 'react';

type MyDumbProps = {
    onTemperatureChange: (t: number) => void;
    scale: string;
    temperature?: number;
};


type InputEvent = React.ChangeEvent<HTMLInputElement>;


const scaleNames =  {
    'c': 'Celsius',
    'f': 'Fahrenheit'
}

const TemperatureInput = ({ temperature, onTemperatureChange, scale }: MyDumbProps) => {
    let _scale: string = (scale === 'c' ? scaleNames[scale] : scaleNames[scale]);
   
    return (
        <div>
            <fieldset>
                <legend>Enter temperature in {_scale}:</legend>
                <input
                    placeholder="enter temperature"
                    value={temperature}
                    onChange={(e) => onTemperatureChange(parseInt(e.target.value))}
                    type="number" />
            </fieldset>
        </div>
    )
}

export default TemperatureInput