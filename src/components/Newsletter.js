import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';

const Container = styled.div`
height: 60vh;
background-color: #FCF8E8;
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.h1``
const Description = styled.div``

const InputContainer = styled.div``

const Input = styled.div``

const Button = styled.button``

const Newsletter = () => {
    return (
        <div>
            <Container>
                <Title>Newsletter</Title>
                <Description>Get timely updates from your favourite products.</Description>
                <InputContainer>
                    <Input placeholder="Your Email" />
                    <Button>
                        <SendIcon />
                    </Button>
                </InputContainer>
            </Container>
        </div>
    )
}

export default Newsletter