import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Intro from '../components/Intro'
import About from '../components/About'
import styled from 'styled-components'
const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`

const AngleShape = styled.div`
    clip-path: polygon(68% 0, 100% 0%, 100% 100%, 54% 100%);
    background-color: #C8D5B9;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const CircleShape = styled.div`
    clip-path: circle(30.3% at 4% 56%);

    background-color: #68B0AB;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`


export default function Home() {
    return (
        <Container>
            <Navbar/>
            <Intro/>
            <AngleShape/>
            
            <CircleShape/>
            
            <About/>
        </Container>
            
    )
}
