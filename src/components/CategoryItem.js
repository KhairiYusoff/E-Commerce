import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
margin-bottom: 6rem;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "30vh" })}
`
const Info = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px;
`
const Title = styled.h2`
color: white;
background-color: purple;
margin-bottom: 20px;
width: 200px;
border: 1px solid black;
text-align: center;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
            </Info>
        </Container>
    )
}

export default CategoryItem