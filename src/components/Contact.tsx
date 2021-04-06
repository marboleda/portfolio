import React from 'react';
import styled from 'styled-components';

import linkedInLogo from '../images/li-logo.svg';

const ContactContainer = styled.div`
    background-color: #efeeff;
    margin-bottom: 0;
    padding: 20px 0;
`;

const ContactHeader = styled.h2`
    color: #304378;
`;

const ContactImage = styled.img`
    height: 64px;
`;


const Contact = () => {
    return(
        <ContactContainer id='contact'>
            <ContactHeader>Contact Me:</ContactHeader>
            <a href='https://www.linkedin.com/in/marco-arboleda/'><ContactImage src={linkedInLogo} alt="LinkedIn"></ContactImage></a>
            <p>Email: arboleda.marco@gmail.com</p>
        </ContactContainer>
    );
}

export default Contact;