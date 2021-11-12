import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";
import { CardBox } from "../../Components/Card/styles";
import FavoriteBook from "../../Components/FavoriteBook";
import { Container } from "./styles";
import { Title } from "./styles";
import { NotFoundBookFavorite } from "./styles";

import api from "../../Services/api";
import { FaHeartBroken } from "react-icons/fa";

export default function FavoritesPage() {
  const [favoriteBook, setFavoriteBook] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(Number(localStorage.getItem("@tbooks:id")));
  });

  useEffect(() => {
    if (userId) {
      // Fazendo uma solicitação para um usuário com um determinado ID
      api
        .get(`/books/${userId}`)
        .then(function (response) {
          // handle success
          setFavoriteBook(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [userId, favoriteBook]);

  return (
    <>
      <NavBar />
      <Container>
        <div
          id="sws"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Title>Favoritos : </Title>
          <img src="favorite-image.svg" height="550px" />
        </div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
        </style>
        <div>
          <CardBox>
            <div>
              {favoriteBook.length !== 0 ? (
                favoriteBook.map((favoriteBook) => (
                  <FavoriteBook book={favoriteBook} />
                ))
              ) : (
                <NotFoundBookFavorite>
                  Não há livros favoritos no momento
                  <p>
                    <FaHeartBroken />
                  </p>
                </NotFoundBookFavorite>
              )}
            </div>
          </CardBox>
        </div>

        {/* <CardBox>
                {favoriteBook 
                    ? favoriteBook.map(book =>(
                    <CardBook book={book}/>
                    
                )) : "Não há livros favoritos no momento"}
            </CardBox> */}
      </Container>
      <Footer />
    </>
  );
}
