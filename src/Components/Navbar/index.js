import React from "react";
import { VscHeart } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth";
import { Container, NavBarText, TopNav } from "./styles";

export default function NavBar() {
  const { user, logout } = useAuth();
  
  return (
    <>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
    </style>
    

    <TopNav>
      <div className="topnav">
        <Link
          to="/"
          style={{
            color: "white",
            fontFamily: "Rampart One",
          }}
        >
          TBooks
        </Link>
        <Link to="/search">Buscar</Link>
        {user ? (
          <>
            <Link to="/favorites">
              <VscHeart size="15px" /> Favoritos
            </Link>
            <button onClick={logout}>Sair</button>
            <button style={{backgroundColor:"#E55476"}} disabled="disabled">Olá, {user}</button>
          </>
        ) : (
          <Link to="/formAccount" style={{backgroundColor:"#F19C90"}}>
           Entrar como convidado
          </Link>
        )}
      </div>
    </TopNav>
  </>
  );
}
