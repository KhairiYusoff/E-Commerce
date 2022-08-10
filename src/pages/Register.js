
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url("https://images.pexels.com/photos/628241/pexels-photo-628241.jpeg?auto=compress&cs=tinysrgb&w=1600");
background-size:cover;


`

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const AgreementContainer = styled.div`
display: flex;
flex-direction: column;
`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`

const Button = styled.button`
background-color: white;
padding: 10px;
width: 50%;
cursor: pointer;
&:hover{
    background-color: darkturquoise;
    color: white;
    transition: ease-out 0.7s;
    border: none;
}
`

const Register = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                        <Input placeholder="Username" />
                        <Input placeholder="Email" />
                        <Input placeholder="Password" />
                        <Input placeholder="Confirm Password" />
                        <AgreementContainer>
                            <Agreement>
                                By creating an account, you agree to Khairi's Conditions of Use and Privacy Notice.
                            </Agreement>
                            <Button>CREATE</Button>
                        </AgreementContainer>

                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Register