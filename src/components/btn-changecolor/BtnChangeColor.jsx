import { StyledBtnChangeColor } from './styles';

const BtnChangeColor = ({ action, children }) => {
	return (
		<StyledBtnChangeColor onClick={action}>{children}</StyledBtnChangeColor>
	);
};

export default BtnChangeColor;
