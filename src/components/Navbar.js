import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { mobile } from '../responsive'

const Container = styled.div`
height: 60px;
background-color: black;
color:white;
${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
height: 70px;
align-items: center;
${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
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
${mobile({ width: "50px" })}
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
${mobile({ flex: 3, justifyContent: "center" })}
`

const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin: 15px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
                        <Input placeholder='search' />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center><Logo>KHAIRI</Logo></Center>
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