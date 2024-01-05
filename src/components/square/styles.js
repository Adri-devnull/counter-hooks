import styled from 'styled-components';

const StyledSquare = styled.div`
	margin-top: 50px;
	width: 200px;
	height: 200px;
	background-color: ${({ color }) => color};
`;

export { StyledSquare };
