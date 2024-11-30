import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  :root {
    --navy-blue: #000080;
    --light-blue: #6495ED;
    --white: #ffffff;
    --gray: #333333;
    --light-gray: #f5f5f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: var(--white);
    color: var(--gray);
  }
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Main = styled.main`
  margin-left: 250px;
  padding: 2rem;
  width: calc(100% - 250px);

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 1rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navigation />
        <Main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </Main>
      </Container>
    </>
  );
}

export default App;
