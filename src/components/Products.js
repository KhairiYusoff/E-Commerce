import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
flex-wrap: wrap;
`
const Products = () => {
    return (
        <div>
            <Container>
                {popularProducts.map(item => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </div>
    )
}

export default Products