import React from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow: hidden;
position: relative;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: wheat;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(-200vw);
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props => props.bg};
`
const ImageContainer = styled.div`
height: 100%;
flex: 1;
`

const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`

const Description = styled.p`
font-size: 20px;
margin: 50px 0;
font-weight: 500;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper>
                <Slide bg="#00ff0080">
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1592840078849-627344f3bbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>BRANDS SALE</Title>
                        <Description>8.8 - MALAYSIA #1 SUPER BRANDS SALE FESTIVAL</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="#0000ff80">
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1592840078849-627344f3bbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>BRANDS SALE</Title>
                        <Description>8.8 - MALAYSIA #1 SUPER BRANDS SALE FESTIVAL</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="#ff00ff80">
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1592840078849-627344f3bbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>BRANDS SALE</Title>
                        <Description>8.8 - MALAYSIA #1 SUPER BRANDS SALE FESTIVAL</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider