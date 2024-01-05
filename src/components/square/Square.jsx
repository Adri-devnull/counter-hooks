import { useState } from 'react';
import { StyledSquare } from './styles';

const Square = () => {
	const [color, setColor] = useState('red');

	return (
		<>
			<StyledSquare color='blue'></StyledSquare>
			<button onClick={() => changeColor(color, setColor)}>Change Color</button>
		</>
	);
};

const changeColor = (color, setColor) => {
	setColor(console.log(color));
};

export default Square;
