import React from 'react';

type MyDumbProps = {
    onTemperatureChange: (t: number) => void;
    scale?: string;
    temperature?: number;
  };


  type InputEvent = React.ChangeEvent<HTMLInputElement>;
// const scaleNames = {
// 	c: 'Celsius',
// 	f: 'Fahrenheit'
// };


const TemperatureInput = ({temperature, onTemperatureChange, scale}:MyDumbProps) => {
    //const [temp, setTemp] = useState<number>()
    return (
        <div>
            <fieldset>
				<legend>Enter temperature in {scale}:</legend>
                <input 
                    value={temperature} 
                    onChange={(e) => onTemperatureChange(parseInt(e.target.value))} 
                    type="number" />
			</fieldset> 
        </div>
    )
}

export default  TemperatureInput