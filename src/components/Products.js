import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
display: flex;
padding: 20px;
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