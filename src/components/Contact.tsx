import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  color: var(--navy-blue);
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a, p {
    text-decoration: none;
    color: var(--gray);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--navy-blue);
    }
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Work with me</SectionTitle>
      <ContactInfo>
        <a href="https://www.linkedin.com/in/eshwar-manideep-peela-4566a2259/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/Eshwar-2410" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="mailto:peelaeshwarmanideep.20.ece@anits.edu.in">
          <FontAwesomeIcon icon={faEnvelope} /> peelaeshwarmanideep.20.ece@anits.edu.in
        </a>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +91 7207390713
        </p>
      </ContactInfo>
    </ContactSection>
  );
};

export default Contact;
