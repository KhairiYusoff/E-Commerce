
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
opacity: 0;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`

const Container = styled.div`
display: flex;
flex: 1;
margin: 5px;
min-width: 320px;
height: 400px;
justify-content: center;
align-items: center;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
position: absolute;
background-color: aliceblue;
`

const Image = styled.img`
z-index: 2;
height: 85%;

`

const Icon = styled.div`
background-color: white;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover{
    background-color: aliceblue;
    transform: scale(1.1);
    cursor: pointer;
}
`

const Product = ({ item }) => {
    return (
        <div>
            <Container>
                <Circle />
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <ShoppingCartOutlinedIcon />
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