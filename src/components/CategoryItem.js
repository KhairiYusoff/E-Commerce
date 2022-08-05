import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
display: block;
text-align: center;
border: 1px solid;

`
const Title = styled.h2`
color: white;
background-color: purple;
margin-bottom: 20px;
`
const Button = styled.button`
padding: 10px 20px;
background-color: purple;
color: white;
cursor: pointer;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem