import React from 'react';
import styled from 'styled-components';

import inventory_app_preview from '../images/inventory_app_preview.png';
import memory_game_preview from '../images/memory_game_preview.png';
import tic_tac_toe_preview from '../images/tic_tac_toe_preview.png';

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    max-width: 100vw;
`;

const Project = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 420px 1fr;
    grid-template-rows: 1fr 820px;
    grid-auto-flow: column;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 740px auto;
    }
`;

const ProjectHeader = styled.h3`
    font-size: 2rem;
    font-family: Helvetica;
`;

const ProjectPreview = styled.img`
    border: 5px solid #000000;
    border-radius: 10%;
    @media (max-width: 1200px) {
        justify-self: center;
    }
    @media (max-width: 520px) {
        width: 80vw;
    }
`;

const ProjectInfo = styled.div`
    @media (min-width: 1200px) {
        grid-row: span 2;
    }
    @media (max-width: 1200px) {
        max-width: 75vw;
        justify-self: center;
    }
    align-self: center;
`;

const ProjectDescription = styled.p`
    padding: 30px 20px 0px 20px;
    box-sizing: border-box;
    font-size: 1.75rem;
    font-family: Helvetica;
`;

const ProjectButton = styled.button`
    background-color: #efeeff;
    color: #304378;
    width: 30%;
    height: 3rem;
    font-size: 2rem;
    font-family: Helvetica;
    margin: 0 5px;
    &:hover {
        cursor: pointer;
    }
`;

const Projects = () => {

    const codeRootPath = 'https://github.com/marboleda/';
    const demoRootPath = 'https://marboleda.github.io/'

    return (
        <ProjectsContainer id='projects'>
            <Project>
                <ProjectHeader>Inventory App</ProjectHeader>
                <ProjectPreview src={inventory_app_preview} alt='inventory app preview' />
                <ProjectInfo>
                    <ProjectDescription>
                        This is an inventory management app for an imaginary grocery store (design inspired by Walmart's online grocery section).
                        <br /><br />
                        I created this with the help of Node.js, Express, MongoDB, and React. <br />
                        Express allows you to use a view template engine such as Pug or EJS to create the front-end, but I opted to use React since I wanted to combine
                            one of the front-end frameworks I've learned with a back-end.
                        <br/><br />
                        This was my first time trying to use React with a back-end database and I learned a lot in the process. <br />
                        Having to make API calls meant that I leveraged the useEffect hook to simulate the same behaviour as lifecycle components and got a lot of practice with it. <br />
                        This project also helped solidify my knowledge of doing C.R.U.D. operations (Create, Read, Update, Delete) on a back-end database.
                    </ProjectDescription>
                    <a href={`${codeRootPath}inventory-application`} target='blank'><ProjectButton>Code</ProjectButton></a>
                    <a href='https://shielded-island-77030.herokuapp.com/' target='blank'><ProjectButton>Demo</ProjectButton></a>
                </ProjectInfo>
            </Project>
            <Project>
                <ProjectHeader>Memory Game</ProjectHeader>
                <ProjectPreview src={memory_game_preview} alt='memory game preview' />
                <ProjectInfo>
                    <ProjectDescription>
                        This is a memory game where you have to repeatedly choose from a set of cards portraying characters from the Tekken video game franchise without choosing the same character twice.
                        <br /><br />
                        This was my first exposure to using React Hooks, and I found them a lot easier to set up and use compared to class-based components.<br />
                        I used React's state management to keep track of the order of the cards, which cards have already been selected, and a tally of the player's current score and high score.
                        <br /><br />
                        I also made use of the Fisher-Yates shuffling algorithm to shuffle the cards. This is an efficient algorithm as it does not need to create a second array (meaning it is space-efficient)
                            and the runtime is O(n).
                    </ProjectDescription>
                    <a href={`${codeRootPath}memory-card-game`} target='blank'><ProjectButton>Code</ProjectButton></a>
                    <a href={`${demoRootPath}memory-card-game`} target='blank'><ProjectButton>Demo</ProjectButton></a>
                </ProjectInfo>
            </Project>
            <Project>
                <ProjectHeader>Tic Tac Toe</ProjectHeader>
                <ProjectPreview src={tic_tac_toe_preview} alt='tic tac toe preview' />
                <ProjectInfo>
                    <ProjectDescription>
                        This is a Tic Tac Toe game created using vanilla JavaScript <br />
                        I made use of the Factory Function and Module design patterns to create this app.
                        <br /><br />
                        One of the most fun and challenging parts of creating this was the optional goal of implementing a computer AI that is impossible to beat (i.e. at best, you can make the game end in a drew) <br />
                        I had to learn how to implement the Minimax AI algorithm for this type of game which also gave me an opportunity to practice recursion.
                    </ProjectDescription>
                    <a href={`${codeRootPath}tic-tac-toe`} target='blank'><ProjectButton>Code</ProjectButton></a>
                    <a href={`${demoRootPath}tic-tac-toe`} target='blank'><ProjectButton>Demo</ProjectButton></a>              
                </ProjectInfo>
            </Project>
        </ProjectsContainer>
    )
}

export default Projects;