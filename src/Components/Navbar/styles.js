import styled from 'styled-components';
import {colors} from '../../styles/colors';

export const TopNav = styled.div`
   overflow: hidden;
   background-color: ${colors.primary};
   color: white;

   a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
    color: ${colors.white};
  }

   button {
    float: right;
    padding: 6px;
    border: none;
    margin-top: 8px;
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

  @media screen and (max-width: 600px) {
    a, button {
      float: none;
      display: block;
      text-align: left;
      width: 100%;
      margin: 0;
      padding: 14px;
    }
  }
    
`;