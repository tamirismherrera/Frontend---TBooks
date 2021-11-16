import React,{ useState, useEffect } from "react";
import { VscSearch } from 'react-icons/vsc';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/Navbar';
import CardBook from '../../Components/Card';
import { CardBox } from '../../Components/Card/styles';
import { Button,Container, InputBox, InputStyle,  Content,Title} from './styles';
import {useFavoriteBook} from '../../Context/fav';
import axios from 'axios';
import Loading from "../../Components/Loading";
import api from "../../Services/api";
import "./styles";

export default function SearchPage(){

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const apiKey = "key";
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(false); // definindo o estado do loading
    const [livrosFavoritos, setLivrosFavoritos] = [];
    const { setBooksIds } = useFavoriteBook();
  

    useEffect(() => {
        setUserId(Number(localStorage.getItem("@tbooks:id")));
      },[]);

      // trazendo os favoritos do usuário para fazer a validação de faavoritos
    useEffect(() => {
    if (userId) {
        api.get(`/books/${userId}`)
        .then(data => {
            let livros_id = [];
            data.data.map(livro =>{
                livros_id.push(livro.id_book);
            })
            
        return livros_id;
        }).then(array => setBooksIds(array));
    }
    }, [userId]);
    console.log(livrosFavoritos);
  
   
    
    function handleChange(event){
        const book = event.target.value;

        setBook(book);
    }

    function handleSubmit(event){

        event.preventDefault();

        setLoading(true); // setando o estado como true antes de fazer a requisicao da api

        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key=" + apiKey + "&maxResults=40")
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items);

            setLoading(false); // setando como false depois de trazer os resultados
        });
        
    }


    return( 
        <>
         <style>
            @import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
        </style>
        <div style={{display: "flex", flexDirection: "column", height: "100%", justifyContent:"space-between"}}>
            <NavBar/>
            <Container>
                <Content>
                    <Title>TBOOKS</Title>
                    <img src="image-search.svg"  alt="search"/>
                    <form onSubmit={handleSubmit}>
                        <InputBox >
                                <InputStyle onChange={handleChange} placeholder=" Digite o nome do livro, autor ou editora ..." autoComplete="off"></InputStyle>
                                <Button type="submit">
                                    < VscSearch  size="25px"/>
                                </Button>
                        </InputBox>
                    </form>
                </Content>
                {loading ? <Loading/> :
                    <>
                    <CardBox>
                        {result.map(book =>(
                            <CardBook book={book}/>
                            
                        ))}
                    </CardBox>
                    </>
                }
            </Container>
            <Footer/>
        </div>
        </>
    ); 
} 

