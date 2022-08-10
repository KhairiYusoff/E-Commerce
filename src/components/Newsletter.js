import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
height: 60vh;
background-color: #FCF8E8;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 60px;
`
const Description = styled.div`
font-size: 22px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
height: 40px;
width: 50%;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid;
${mobile({ width: "70%" })}
`

const Input = styled.input`
border: none;
flex: 7;
padding-left: 10px;
`

const Button = styled.button`
flex: 1;
background-color: white;
cursor: pointer;
&:hover{
    background-color: darkturquoise;
    color: white;
    transition: ease-out 0.7s;
    border: none;
}
`

const Newsletter = () => {

    return (
        <div>
            <Container>
                <Title>Newsletter</Title>
                <Description>Get timely updates from your favourite products.</Description>
                <InputContainer>
                    <Input placeholder="Your Email" />
                    <Button>
                        <SendIcon />
                    </Button>
                </InputContainer>
            </Container>
        </div>
    )
}

export default Newsletter