import React, { useEffect, useState } from "react";
import { ButtonDiv, Card, CardBox, CardImage, LikeBar } from "./styles";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import api from "../../Services/api";
import { useAuth } from "../../Context/auth";
import { useFavoriteBook } from "../../Context/fav";

export default function CardBook({ book }) {
  const [favorite, setFavorite] = useState(false); //setando o estado do fav
  const { id } = useAuth();

  const { booksIds } = useFavoriteBook();

  // Confere pra ver se o valor do estado está como "true"
  //Se estiver ele retorna  com o coração preenchido
  const checkIfIsFavorite = () =>
    favorite ? (
      <HiHeart size="25px" color="red" />
    ) : (
      <HiOutlineHeart onClick={() => createFavorite()} size="25px" />
    );

  useEffect(() => {
    if (booksIds.includes(book.id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, []);

  async function createFavorite() {
    if (favorite) {
      return;
    } else {
      await api
        .post("/books/save", {
          id_user: id,
          title_book: book.volumeInfo.title,
          id_book: book.id,
        })
        .then(() => setFavorite(true))
        .catch(function (erro) {
          console.log(erro);
        });
    }
  }

  return (
    <CardBox>
      <Card>
        <CardImage>
          <img
            src={
              book.volumeInfo.imageLinks === undefined
                ? "https://v0.static.betalabs.com.br/ecommerce/pratikos/img/unavailable.jpg"
                : `${book.volumeInfo.imageLinks.thumbnail}`
            }
            alt={book.title}
          />
        </CardImage>

        <div className="card-header">
          <div className="card-title-group">
            <h5 className="card-title">Título : {book.volumeInfo.title}</h5>
            <div className="card-author">
              Editora : {book.volumeInfo.publisher}
            </div>
          </div>
        </div>

        {id ? (
          <LikeBar>
            <div>
              <div>{checkIfIsFavorite()}</div>
            </div>
            <ButtonDiv>
              <button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={book.volumeInfo.previewLink}
                >
                  Mais
                </a>
              </button>
            </ButtonDiv>
          </LikeBar>
        ) : (
          ""
        )}
      </Card>
    </CardBox>
  );
}
