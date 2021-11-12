import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height:100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p1/1886051-color-books-seamless-pattern-background-vetor.jpg");

  body{
    max-width: 500px;
    margin: 30px auto;
    height: 255px;
    overflow: auto;
    min-height: 200px;
    border: 2px solid #F19C90;
    padding: 30px;
    border-radius: 10px;
    background-color: #F19C90;
    color: ${colors.white};
  }
  h1 {
    text-align: center;
    font-size: 50px;
    padding: 25px;
    font-family: "Rampart One", cursive;
  }

  input {
    border-radius: 8px;
    width: 350px;
    height: 5vh;
    border-color: ${colors.white};
    padding-inline-start: 10px;
  }

  header {
    background-color: ${colors.primary};
    display: flex;
    padding: 25px;
  } 
  button {
    background-color: ${colors.primary};
    color: #fff;
    width: 21%;
    height: 6vh;
    border: none;
    border-radius: 8px;

    &:hover {
      filter: opacity(0.9);
    }
  }
`;

export const TopNavBar = styled.div`
   overflow: hidden;
   background-color: ${colors.primary};
   color: white;

   button {
    float: right;
    padding: 14px;
    border: none;
    margin-right: 16px;
    font-size: 17px;
    background-color: ${colors.primary};
    border-radius: 5px;
    color: ${colors.white};


    &:hover{
        background-color: ${colors.secondary};
        color: ${colors.white};
    }
  }
`;