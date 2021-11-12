import React from 'react';
import { Container, Title, Button, SubTitle, Image, LeftContainer, ButtonBox, RightContainer } from './styles'
import { Link } from 'react-router-dom';
import {VscSearch } from 'react-icons/vsc';

export default function HomePage(){

    return( 
        <Container>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
        </style>
            <LeftContainer>
                <Title> Seu buscador de livros favorito </Title>
                <SubTitle>Encontre diversos livros com um só clique !</SubTitle>
                <Link to='/search'>
                    <Button>
                        <ButtonBox>< VscSearch size="25px"/> </ButtonBox>
                        Buscar Livros
                    </Button>
                </Link>
            </LeftContainer>

            <RightContainer>
                <Image/>
            </RightContainer>
        </Container>
    ); 
} 

