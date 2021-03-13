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
    height: 80vh;
    font-family: Helvetica;
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
        <AboutContainer>
            <AboutText>Hi! I make web apps using the technology below.</AboutText>
            <AboutText>Have a look at my projects and reach out if you think I could be of help to your company!</AboutText>
            <SkillGrid>
                <SkillCard><SkillImg src={js_logo}></SkillImg>JavaScript</SkillCard>
                <SkillCard><SkillImg src={react_logo}></SkillImg>React</SkillCard>
                <SkillCard><SkillImg src={html_logo}></SkillImg>HTML</SkillCard>
                <SkillCard><SkillImg src={css_logo}></SkillImg>CSS</SkillCard>
                <SkillCard><SkillImg src={node_logo}></SkillImg>Node.js</SkillCard>
                <SkillCard><SkillImg src={mongodb_logo}></SkillImg>MongoDB</SkillCard>
            </SkillGrid>
        </AboutContainer>
    )
}

export default About;