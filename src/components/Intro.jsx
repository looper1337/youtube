import React from "react"
import styled from "styled-components"
import HomePicture from '../img/1.png'
const Container = styled.div`
    height: calc(100vh - 50px);
    
    display: flex;
    padding: 20px;
`

const Left = styled.div`
    height: calc(100vh - 50px);
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const Right = styled.div`
    height: calc(100vh - 50px);
    width: 40%;
    
`

const Title = styled.h1`
    font-size: 60px;
    width: 60%;

`


const Description = styled.p`
    font-size: 20px;
    width: 60%;
    margin-top:20px;

`

const Info = styled.div`
    width: 60%;
    display: flex;
`

const Image = styled.img`
    width: 100%;

`
export default function Intro() {
    return (
        
        <Container>
            <Left>
            <Title>
                Welcome to MarketSmart
            </Title>
            <Description>
                Enter description
            </Description>
            <Info>
                
            </Info>
            </Left>
            <Right>
                <Image src={HomePicture}/>

            </Right>
        </Container>

    )
}
