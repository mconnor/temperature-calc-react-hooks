import React from 'react';


type MyDumbProps = {
    celsius: number;
}

const BoilingVerdict: React.FC<MyDumbProps> = ({ celsius }) => {
	if (celsius >= 100) {
		return <p>The water would boil.</p>;
	} else if (celsius < 100 && celsius > 0) {
		return <p>The water would not boil.</p>;
	} else {
		return <p>The water would freeze.</p>;
	}
};

export default BoilingVerdict;
