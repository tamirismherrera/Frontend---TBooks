import styled from "styled-components";
import { colors } from "../../styles/colors";


export const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #FCF6ED;
    display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
    
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const Title = styled.h1 `
    font-size: 54px;
    color:  ${colors.primary};
    padding-bottom : 50px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    max-width: 500px;
    padding-top: 1%;
`;

export const NotFoundBookFavorite = styled.div`
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 200px;
    border: 2px solid rgb(255, 0, 140);
    padding: 30px;
    border-radius: 10px;
   font-family: 'Ubuntu', sans-serif;
   font-size: 50px;
   text-align: center;
   background-color: white;
   color: ${colors.primary};

   p{
    padding-top: 17px;
   }
   
`;