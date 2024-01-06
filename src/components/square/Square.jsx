import { useState } from 'react';
import { StyledSquare } from './styles';
import BtnChangeColor from '../btn-changecolor/BtnChangeColor';

const Square = () => {
	const [color, setColor] = useState('red');
	return (
		<>
			<StyledSquare color={color} />
			<BtnChangeColor action={() => changeColor(color, setColor)}>
				Change Color
			</BtnChangeColor>
		</>
	);
};

const changeColor = (color, setColor) => {
	if (color === 'red') {
		setColor((color = 'green'));
	} else {
		setColor((color = 'red'));
	}
};

export default Square;
