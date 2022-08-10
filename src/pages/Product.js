import React from 'react'
import styled from 'styled-components'
import Annoucements from '../components/Annoucements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
display: flex;
padding: 20px;
${mobile({ flexDirection: "column" })}
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
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 50%;
margin: 20px 0;
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-style: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0 5px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 50%;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
${mobile({ margin: "10px" })}
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid;
margin: 0 5px;
`

const Button = styled.button`
padding: 15px 30px;
border: 1px solid;
background: white;
cursor: pointer;
font-weight: 500;
font-size:15px;
&:hover{
    background-color: darkturquoise;
    color: white;
    transition: ease-out 0.7s;
}
${mobile({ marginLeft: "10px" })}`

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
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="red" />
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <RemoveIcon />
                                <Amount>1</Amount>
                                <AddIcon />
                            </AmountContainer>
                            <Button>Add Cart</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <Newsletter />
                <Footer />
            </Container>
        </div>
    )
}

export default Product