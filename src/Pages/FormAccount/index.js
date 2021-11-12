import React, { useState } from "react";
import { useAuth } from "../../Context/auth";
import { Link } from "react-router-dom";
import { Container, Header , TopNavBar} from "./styles";
import { HiOutlineReply } from "react-icons/hi";
import "../../styles.css";

export default function FormAccountPage() {
  const { user, setUser, login, logout } = useAuth();

  const [userName, setUserName] = useState("");

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
      </style>
      <TopNavBar>
      <Link to="/search" style={{backgroundColor:"#F19C90"}}>
        <button><HiOutlineReply/> Voltar</button>
        </Link>
         
      </TopNavBar>
      <Container>
            <body>
                <h1>Qual seu nome ?</h1>
                <div style={{padding:"15px"}}>
                <input
                    type="text"
                    name="user"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div style={{ padding: "18px" }}>
              <button type="submit" onClick={() => login(userName)}>
                Entrar
              </button>
            </div>
            
          </body>
      </Container>
    </>
  );
}