import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
background-color: black;
color:white;
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
margin-left: 20px;
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

                    </SearchContainer>
                </Left>
                <Center><Logo>KHAIRI</Logo></Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN-IN</MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar