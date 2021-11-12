import styled from 'styled-components';
import {colors} from '../../styles/colors';

export const CardBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding: 1%;
	

`;
export const Card = styled.div`
	background-color: ${colors.white};
	color: #272727;
	padding: 10px;
	border-radius: 10px;
	border: 2px;
    border-color:#e34267;
	border-style: solid;
	white-space: break-all;
	max-width: 230px;
	
           
`;
export const CardImage = styled.div`
	border-radius: 10px;
	margin-bottom: 10px;
    justify-content: center;
    flex-Direction: column;
	
	img{
		width: 230px;
		height: 320px;
		align-self: center;
		max-width: 400px;
		max-height: 400px;
	}
    
`;

export const LikeBar = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	justify-content: space-between;
	cursor: pointer;
  
`;

export const ButtonDiv = styled.div`
	
	
	a{
	color: ${colors.white};
	font-size: 18px;
	text-decoration: none;

	}

	button{
		background-color: ${colors.primary};
		border-radius: 5px;
		border-color: ${colors.primary};
		
		
		&:hover{
        filter: opacity(0.9);
    	}
	}

`;
/*


.card-text {
	width: 350px;
	font-size: medium;
}

.card-like-bar {
	display: flex;
	align-items: center;
	margin-top: 20px;
	justify-content: space-between;
}

`;
*/