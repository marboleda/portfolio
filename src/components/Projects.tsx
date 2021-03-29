import React from 'react';
import styled from 'styled-components';

import inventory_app_preview from '../images/inventory_app_preview.png';
import memory_game_preview from '../images/memory_game_preview.png';

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`;

const Project = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 420px 1fr;
    grid-template-rows: 1fr 820px;
    grid-auto-flow: column;
`;

const ProjectDescription = styled.p`
    padding: 30px 20px 0px 20px;
    grid-row: span 2;
`;

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <Project>
                <h3>Inventory App</h3>
                <img src={inventory_app_preview} alt='inventory app preview' />
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
            </Project>
            <Project>
                <h3>Memory Game</h3>
                <img src={memory_game_preview} alt='memory game preview' />
                <ProjectDescription>
                    This is a memory game where you have to repeatedly choose from a set of cards portraying characters from the Tekken video game franchise without choosing the same character twice.
                    <br /><br />
                    This was my first exposure to using React Hooks, and I found them a lot easier to set up and use compared to class-based components.<br />
                    I used React's state management to keep track of the order of the cards, which cards have already been selected, and a tally of the player's current score and high score.
                    <br /><br />
                    I also made use of the Fisher-Yates shuffling algorithm to shuffle the cards. This is an efficient algorithm as it does not need to create a second array (meaning it is space-efficient)
                        and the runtime is O(n).
                </ProjectDescription>
            </Project>
        </ProjectsContainer>
    )
}

export default Projects;