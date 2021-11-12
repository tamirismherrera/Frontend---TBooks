import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("./home-background.svg") no-repeat 100px bottom;
    background-color: ${colors.background};
    display: flex;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const Title = styled.h1 `
    font-size: 54px;
    color: #e34267;
    padding-bottom : 50px;
    text-align: center;
    font-family: 'Rampart One', cursive;
    max-width: 500px;
`;

export const SubTitle = styled.p`
    font-size: 24px;
    padding-bottom: 50px;
    text-align: center;
    max-width: 500px;
    color: #34325E;
`;

export const ButtonBox = styled.div`
    background-color: ${colors.secondary};
    color: #fff;
    height: 50px;
    width: 40px;

    font-size: 30px;

    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const Button = styled.button`
    background-color: ${colors.primary};
    color: ${colors.white};
    height: 50px;
    //width: 150px;
    border: none;
    border-radius: 5px;
    
    position: relative;
    padding-left: 50px;

    font-size: 20px;

    &:hover{
        filter: opacity(0.9);
    }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 100%;
`;