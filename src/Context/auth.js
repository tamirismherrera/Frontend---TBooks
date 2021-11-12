import React, { createContext, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
//import { v4 as uuidv4 } from 'uuid'; // é uma biblioteca pra criar hash aleatorio; 

const AuthContext = createContext();


export default function AuthProvider({ children }) { //função que vai prover as variaveis pra aplicação 
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const newId = Math.floor(Math.random() * 10000000);

  const login = (userName) => {
    
    if(userName !== "" && userName !== null){
      localStorage.setItem('@tbooks:username', userName);
      localStorage.setItem('@tbooks:id', newId);

      setUser(userName);

      window.location.href = "http://localhost:3000/search"; 
    //history.push("/search");
    } else{
      alert("Ops ! Você precisa digitar o seu nome ");
    }
  };

  const logout = () => {
    window.location.href = "http://localhost:3000/"; 

    localStorage.removeItem('@tbooks:username');
    localStorage.removeItem('@tbooks:id');
    setUser("");
    setId();
   
 };

 useEffect(() => {
    const user = localStorage.getItem('@tbooks:username');
    const id = localStorage.getItem('@tbooks:id');
    setUser(user);
    setId(id);
 }, [])

  return (
    <AuthContext.Provider value={{ user,id, setUser, login, logout}}> 
      {children}
    </AuthContext.Provider> 
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { user,id, setUser, login, logout} = context;
  return { user,id, setUser, login, logout };
}