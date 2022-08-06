
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
margin: 5px;
`

const Circle = styled.div``
const Image = styled.img``
const Info = styled.div``
const Icon = styled.div``
const Product = ({ item }) => {
    return (
        <div>
            <Container>
                <Circle />
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <ShoppingCart />
                    </Icon>
                    <Icon>
                        <SearchIcon />
                    </Icon>
                    <Icon>
                        <FavoriteBorderIcon />
                    </Icon>
                </Info>
            </Container>
        </div>
    )
}

export default Product