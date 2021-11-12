import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  background-color: #FCF6ED;

  @media (max-width: 868px){
        flex-direction: column;
    }
  
`;


export const DivImage = styled.div`
    width: 50%;
    height: 100vh;
    background-color: #FCF6ED;
    justify-content: flex-start;
    margin: 0px;
    
    img{
        padding: 15px;

      
    }
    @media (max-width: 768px){
        width: 100%;

        img{
            height: 50%;
        }
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

    @media (max-width: 768px){
        font-size: 24px;
    }
`;

export const NotFoundBookFavorite = styled.div`
    max-width: 500px;
    margin: 40px ;
    overflow: auto;
    min-height: 200px;
    border: 2px solid rgb(255, 0, 140);
    padding: 30px;
    border-radius: 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 50px;
    text-align: center;
    background-color: #FCF6ED;
    color: ${colors.primary};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

   p{
    padding-top: 17px;
   }
   
`;