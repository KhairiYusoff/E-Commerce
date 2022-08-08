import React from 'react'
import styled from 'styled-components'
import Annoucements from '../components/Annoucements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``

const Wrapper = styled.div`
display: flex;
`

const ImageContainer = styled.div`
flex: 1;
`

const Image = styled.img`
width: 100%;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`

const Title = styled.h1``

const Desc = styled.p`
margin: 20px 0;
`

const Price = styled.p`
font-weight: 600;
`

const Product = () => {
    return (
        <div>
            <Container>
                <Navbar />
                <Annoucements />
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://img.freepik.com/free-photo/pile-jeans_144627-848.jpg?size=626&ext=jpg&ga=GA1.2.692258777.1659785378" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>HIGH QUALITY JEANS FOR YOU!</Title>
                        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, laborum eaque, nisi omnis voluptas eos obcaecati nesciunt aliquid, atque sint unde culpa rerum ad amet eveniet temporibus quasi! Deleniti, dolorum. Porro animi neque debitis aut et dicta voluptatum fuga ex.</Desc>
                        <Price>Price: $55</Price>
                    </InfoContainer>
                </Wrapper>
                <Newsletter />
                <Footer />
            </Container>
        </div>
    )
}

export default Product