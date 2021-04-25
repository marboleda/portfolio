import React from 'react';
import styled from 'styled-components';

import js_logo from '../images/js-logo.png';
import react_logo from '../images/react-logo.png';
import html_logo from '../images/html-logo.png';
import css_logo from '../images/css-logo.png';
import node_logo from '../images/node-logo.png';
import mongodb_logo from '../images/mongodb-logo.png';


const AboutContainer = styled.div`
    background-color: #efeeff;
    min-height: 75vh;
    font-family: Helvetica;
    padding-top: 20px;
`;

const AboutText = styled.p`
    margin-top: 0px;
    font-weight: normal;
    color: #465972;
`;

const SkillGrid = styled.div`
`;

const SkillCard = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 5px 20px;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 15%;
    font-weight: bold;
    color: #465972;
`;

const SkillImg = styled.img`
    max-width: 125px;
    max-height: 125px;
    margin-bottom: 15px;
`;

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutText>Hi! I make web apps using the technology below.</AboutText>
            <AboutText>Have a look at my projects and reach out if you think I could be of help to your company!</AboutText>
            <SkillGrid>
                <SkillCard><SkillImg src={js_logo} />JavaScript</SkillCard>
                <SkillCard><SkillImg src={react_logo} />React</SkillCard>
                <SkillCard><SkillImg src={html_logo} />HTML</SkillCard>
                <SkillCard><SkillImg src={css_logo} />CSS</SkillCard>
                <SkillCard><SkillImg src={node_logo} />Node.js</SkillCard>
                <SkillCard><SkillImg src={mongodb_logo} />MongoDB</SkillCard>
            </SkillGrid>
        </AboutContainer>
    )
}

export default About;