import React from 'react'
import styled from 'styled-components'
import Annoucements from '../components/Annoucements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
font-weight: 600;
text-align: center;
`

const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === 'filled' && 'none'};
background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
color: ${props => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
${mobile({ display: "none" })}
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
display: flex;
flex:2;
padding: 20px;
`

const Image = styled.img`
width: 200px;
height: 200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
flex-direction: column;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`

const ProductAmount = styled.div`
font-style: 24px;
margin: 5px;
${mobile({ margin: "10px" })}
`

const ProductPrice = styled.div`
font-size: 20px;
font-weight: 200;
${mobile({ margin: "10px" })}
`

const Hr = styled.hr`
background-color: gray;
height: 1;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 600;
`

const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
background-color: white;
padding: 10px;
cursor: pointer;
&:hover{
    background-color: darkturquoise;
    color: white;
    transition: ease-out 0.7s;
    border: none;
}
`

const Cart = () => {
    return (
        <div>
            <Container>
                <Navbar />
                <Annoucements />
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                    <Details>
                                        <ProductName><b>Product:</b> JESSIE</ProductName>
                                        <ProductId><b>ID:</b> 1234567890</ProductId>
                                        <ProductColor color="red" />
                                        <ProductSize><b>Size:</b> 37.5</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <AddIcon />
                                        <ProductAmount>2</ProductAmount>
                                        <RemoveIcon />
                                    </ProductAmountContainer>
                                    <ProductPrice>$30</ProductPrice>
                                </PriceDetail>
                            </Product>
                            <Hr />
                            <Product>
                                <ProductDetail>
                                    <Image src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                    <Details>
                                        <ProductName><b>Product:</b> JASMIE</ProductName>
                                        <ProductId><b>ID:</b> 0987654321</ProductId>
                                        <ProductColor color="greenyellow" />
                                        <ProductSize><b>Size:</b> 37.5</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <AddIcon />
                                        <ProductAmount>2</ProductAmount>
                                        <RemoveIcon />
                                    </ProductAmountContainer>
                                    <ProductPrice>$20</ProductPrice>
                                </PriceDetail>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$80</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$-5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$80</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
                <Footer />
            </Container>
        </div>
    )
}

export default Cart