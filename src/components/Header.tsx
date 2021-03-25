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
    @media (max-width: 660px) {
        flex-direction: column;
        align-items: center;
    }
    margin-top: 0;
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
    @media (max-width: 660px) {
        align-items: center;
    }
`;

const Navbar = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    flex: 2;
    @media (max-width: 660px) {
        width: 80vw;
    }
`;

const NavbarItem = styled.li`
    color: #5c6183;
    font-family: Helvetica;
`;

const NavbarItemLink = styled.a`
    color: inherit;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Header = () => {
    return(
        <HeaderContainer>
            <Name><span>MARCO</span> <span>ARBOLEDA</span></Name>
            <Navbar>
                <NavbarItem><NavbarItemLink href='#about'>About</NavbarItemLink></NavbarItem>
                <NavbarItem><NavbarItemLink href='#projects'>Projects</NavbarItemLink></NavbarItem>
                <NavbarItem><NavbarItemLink href='#resume'>Resume</NavbarItemLink></NavbarItem>
                <NavbarItem><NavbarItemLink href='#contact'>Contact</NavbarItemLink></NavbarItem>
            </Navbar>
        </HeaderContainer>
    );
}

export default Header;