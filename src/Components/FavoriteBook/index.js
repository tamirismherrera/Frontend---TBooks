import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import { HiHeart, HiTrash } from "react-icons/hi";
import api from "../../Services/api";

export default function FavoriteBook({ book }) {
  //const [favoritoCompleto, setFavoritoCompleto] = useState(null);
  const [booksFavorites, setBooksFavorites] = useState([]);
  const teste = (false);
 // const [mudanca, setMudanca] = useState(false)

  // useEffect(() => {
  //   axios
  //     .get(`https://www.googleapis.com/books/v1/volumes/${book.id_book}`)
  //     .then((response) => {
  //       console.log(favoritoCompleto);
  //       setFavoritoCompleto(response.data.items);
  //     });
  // }, [favoritoCompleto]);


  async function handleDeleteBook() {
    try {
      await api.delete(`/books/${book.id}`);
      setBooksFavorites(booksFavorites.filter(book => book.id !== book.id));
     }catch {
      alert("Ocorreu um erro ao deletar, tente novamente!");
    }
  }

  return (
    <Container>
          <div className="card-title" style={{fontSize:'18px'}}>
            Título : {book.title_book}
          </div>
          <button onClick={() => handleDeleteBook(book.id)}>
            <HiTrash style={{color:"#B3B1D3"}}/>
          </button>
    </Container>
  );
}
