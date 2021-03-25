import React from 'react';
import styled from 'styled-components';

import inventory_app_preview from '../images/inventory_app_preview.png';

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
    grid-row: span 2;
`;

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <Project>
                <h3>Inventory App</h3>
                <img src={inventory_app_preview} alt='inventory app&quot;s preview' />
                <ProjectDescription>This is my inventory app, etc., etc.</ProjectDescription>
            </Project>
        </ProjectsContainer>
    )
}

export default Projects;