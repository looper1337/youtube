import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    height: 60px;
    position: sticky;
    z-index: 100000;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`
const Left = styled.div`
    flex: 1;
    
`

const Center = styled.div`

    display: flex;
    flex: 1;
    list-style: none;
    
    
`
const Logo = styled.h1`
    font-weight: bold;
    
`
const Menu = styled.li`
    
    margin-right: 100px;
    font-size: 20px;
    cursor: pointer;
    
`

const Button = styled.button`
    border: 2px white;
    padding: 10px 15px;
    background: #68B0AB;
    color: black;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 25px;
    border-radius: 10px;
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                
                <Left>
                    <Logo>
                        MarketSmart.
                    </Logo>
                </Left>

                
                <Center>
                    <Menu>
                        Home
                    </Menu>
                    <Menu>
                        About
                    </Menu>
                    <Menu>
                        Contact Us
                    </Menu>
                </Center>



                <Right>
                    <Button>
                        Sign In
                    </Button>
                    <Button>
                        Register
                    </Button>
                    
                </Right>

            </Wrapper>
        </Container>
    )
}
