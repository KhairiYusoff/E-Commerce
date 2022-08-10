import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Container = styled.div`
background-color: black;
color:white;
@media only screen and (max-width:380px) {
    display: none;
}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
height: 70px;
align-items: center;
`;

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 20px;
padding: 5px;
`

const Input = styled.input`
border: none;
`
const Center = styled.div`
flex:1;
text-align: center;
`

const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin: 15px;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center><Logo>KHAIRI E-COMMERCE</Logo></Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN-IN</MenuItems>
                    <ShoppingCartIcon />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar