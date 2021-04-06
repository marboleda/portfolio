import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    height: 60px;
    margin: 0 10px;
`;

const ContactLink = styled.a`
    color: inherit;
`

const Contact = () => {
    return(
        <ContactContainer id='contact'>
            <ContactHeader>Contact Me:</ContactHeader>
            <ContactLink href='https://www.linkedin.com/in/marco-arboleda/'><ContactImage src={linkedInLogo} alt="LinkedIn"></ContactImage></ContactLink>
            <ContactLink href='mailto:arboleda.marco@gmail.com'><FontAwesomeIcon size='5x' icon={faEnvelope}></FontAwesomeIcon></ContactLink>
        </ContactContainer>
    );
}

export default Contact;