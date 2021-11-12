import React, { useState, useEffect } from "react";

import { CardBox } from "../../Components/Card/styles";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";
import FavoriteBook from "../../Components/FavoriteBook";
import { Container, DivImage, Title } from "./styles";
import { NotFoundBookFavorite } from "./styles";

import { FaHeartBroken } from "react-icons/fa";

import api from "../../Services/api";
import { useAuth } from "../../Context/auth";

export default function FormAccountPage() {
  const [favoriteBook, setFavoriteBook] = useState([]);
  const [userId, setUserId] = useState();

  const { id } = useAuth();
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

  console.log("oi ", favoriteBook);

  return (
    <>
      <NavBar />
      <Container>
        <DivImage>
          <Title>Favoritos : </Title>
          <img src="favorite-image.svg" height="550px" />
        </DivImage>
        <CardBox>
            {favoriteBook.length !== 0 ? (
              favoriteBook.map((favoriteBook) => (
                <FavoriteBook book={favoriteBook} />
              ))
            ) : (
              <NotFoundBookFavorite>
                  <p>Poxa ...</p>
                <p> Não há livros favoritos no momento. </p>
                <p>
                  <FaHeartBroken />
                </p>
              </NotFoundBookFavorite>
            )}
        </CardBox>
      </Container>
      <Footer />
    </>
  );
}
