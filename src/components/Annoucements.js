import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: darkturquoise;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Annoucements = () => {
    return (
        <Container>
            50% Daily Brands Discounts!
        </Container>
    )
}

export default Annoucements