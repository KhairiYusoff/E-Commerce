import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`

height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url("https://images.pexels.com/photos/628241/pexels-photo-628241.jpeg?auto=compress&cs=tinysrgb&w=1600");
background-size:cover;
`

const Wrapper = styled.div`
width: 20%;
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
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`

const Button = styled.button`
background-color: white;
padding: 10px;
cursor: pointer;
&:hover{
    background-color: darkturquoise;
    color: white;
    transition: ease-out 0.7s;
    border: none;
}
margin-bottom: 10px;
`

const Link = styled.a`
margin: 10px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>SIGN-IN</Title>
                    <Form>
                        <Input placeholder="Username" />
                        <Input placeholder="Password" />
                        <Button>LOGIN</Button>
                        <Link>FORGOT PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Login