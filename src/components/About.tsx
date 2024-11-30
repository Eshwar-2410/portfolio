import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  color: var(--navy-blue);
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutText>
        I am an aspiring MERN stack developer passionate about creating seamless web experiences. 
        With a strong foundation in MongoDB, Express.js, React, and Node.js, I focus on building 
        scalable and efficient web applications that solve real-world problems.
      </AboutText>
    </AboutSection>
  );
};

export default About;
