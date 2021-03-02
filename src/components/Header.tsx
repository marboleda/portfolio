import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #efeeff;
    height: 25vh;
    box-sizing: border-box;
    padding: 3vh 10vw 0 10vw;
    position: relative;
    display: flex;
    justify-content: space-evenly;
`;

const Name = styled.h1`
    color: #304378;
    margin: 0;
    position: relative;
    left: 5vw;
    font-family: Helvetica;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Navbar = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    flex: 2;
`;

const NavbarItem = styled.li`
    color: #5c6183;
    font-family: Helvetica;
`;

const Header = () => {
    return(
        <HeaderContainer>
            <Name><span>MARCO</span> <span>ARBOLEDA</span></Name>
            <Navbar>
                <NavbarItem>About</NavbarItem>
                <NavbarItem>Projects</NavbarItem>
                <NavbarItem>Resume</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
            </Navbar>
        </HeaderContainer>
    );
}

export default Header;