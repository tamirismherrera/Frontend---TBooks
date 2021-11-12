import React, {createContext, useEffect, useState,useContext} from "react";

    const FavContext = createContext();

export default function FavoriteBookProvider({children}){
    
    const [booksIds, setBooksIds] = useState([]);


    return (
        <FavContext.Provider value={{ booksIds, setBooksIds}}> 
          {children}
        </FavContext.Provider> 
      );
}

export function useFavoriteBook(){
    const context = useContext(FavContext);
    const { booksIds, setBooksIds} = context;
    return {booksIds, setBooksIds } 
}