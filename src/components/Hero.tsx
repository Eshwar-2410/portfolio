import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Name = styled.span`
  color: var(--navy-blue);
`;

const Line = styled.span`
  display: block;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: var(--gray);
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--navy-blue);
  color: var(--white);
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <Title>
        <Line>Hello, I'm <Name>Eshwar!</Name></Line>
      </Title>
      <SubTitle>
        <Line>I design and develop</Line>
        <Line>websites.</Line>
      </SubTitle>
      <Subtitle>I also design your brand image, logo...</Subtitle>
      <CTAButton href="#contact">Work with me →</CTAButton>
    </HeroSection>
  );
};

export default Hero;
