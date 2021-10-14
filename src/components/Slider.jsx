import React from 'react'
import styled from "styled-components"
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #bbebeb;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    
`

const Wrapper = styled.div`
    height: 100%;
`
export default function Slider() {
    return (
        <Container>
            
            <Arrow direction = "left">
                <KeyboardArrowLeft>

                </KeyboardArrowLeft>
            </Arrow>
            
            
            <Wrapper>

            </Wrapper>


            <Arrow direction = "right">
                <KeyboardArrowRight>

                </KeyboardArrowRight>
            </Arrow>
        </Container>
    )
}
