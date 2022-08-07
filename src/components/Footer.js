import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1``

const Description = styled.p`
margin: 20px 0;

`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`

const Title = styled.h3`
margin-bottom: 20px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`


const ListItem = styled.li`
width: 50%;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`

const Footer = () => {
    return (
        <div>
            <Container>
                <Left>
                    <Logo>KHAIRI.Inc</Logo>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde numquam corporis delectus eligendi. Magnam ex quod atque placeat delectus praesentium, in esse adipisci suscipit ipsa totam! Nostrum, ab modi, accusamus, voluptatem minus ut nihil qui eos deserunt dolorum nam! Velit?
                    </Description>
                    <SocialContainer>
                        <SocialIcon>
                            <FacebookIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <TwitterIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <LinkedInIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <GitHubIcon />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right></Right>
            </Container>
        </div>
    )
}

export default Footer