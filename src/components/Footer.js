import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ flexDirection: "column" })}
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
cursor: pointer;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
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

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 10%;
margin-right: 10px;
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
                        <ListItem>Shoes</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem><RoomIcon style={{ marginRight: "10px" }} />20, Taman Jurutera, 777000, Malaysia</ContactItem>
                    <ContactItem><PhoneIcon style={{ marginRight: "10px" }} />+123 456 789</ContactItem>
                    <ContactItem><MailIcon style={{ marginRight: "10px" }} />KhairiYusoff@KHAIRI.Inc</ContactItem>
                    <Payment src="https://cdn-icons-png.flaticon.com/512/196/196543.png" />
                    <Payment src="https://cdn-icons-png.flaticon.com/128/196/196578.png" />
                    <Payment src="https://cdn-icons-png.flaticon.com/512/349/349228.png" />
                    <Payment src="https://cdn-icons-png.flaticon.com/512/196/196565.png" />
                    <Payment src="https://cdn-icons-png.flaticon.com/512/5968/5968279.png" />

                </Right>
            </Container>
        </div>
    )
}

export default Footer