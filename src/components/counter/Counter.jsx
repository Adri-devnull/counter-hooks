import { useState } from 'react';
import Button from '../button/Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<h1>{counter}</h1>
			<Button action={() => increment(counter, setCounter)}>+1</Button>
			<Button action={() => decrement(counter, setCounter)}>-1</Button>
			<Button action={() => restart(setCounter)}>Restart</Button>
		</>
	);
};

const increment = (counter, setCounter) => {
	setCounter(counter + 1);
};

const decrement = (counter, setCounter) => {
	setCounter(counter - 1);
};

const restart = setCounter => {
	setCounter(0);
};

export default Counter;
