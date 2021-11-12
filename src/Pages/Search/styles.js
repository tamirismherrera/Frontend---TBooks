import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    background-color: #fcf6ed;
    width: 100%;
    height: 100%;
    
`;

export const InputStyle = styled.input`
    border-radius: 8px;
    width: 40vw;
    height: 5vh;
    border-color: ${colors.primary};
    padding-inline-start: 10px;
    
`;

export const Button = styled.button`
    background-color:${colors.primary};
    color: #fff;
    width:5vw;
    height: 6vh;
    border: none;
    border-radius: 8px;
    transform: rotateY(180deg);

    &:hover{
        filter: opacity(0.9);
    }
`;
export const InputBox = styled.div`
    width:100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;


`;
export const Content = styled.div`
    display: flex;
    padding-top: 4%;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 23%;
    }
`;
export const Title = styled.h1 `
    font-size: 65px;
    color: ${colors.primary};
    padding-bottom : 30px;
    text-align: center;
    font-family: 'Rampart One', cursive;
    max-width: 500px;
`;