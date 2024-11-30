import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 4rem 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: var(--light-gray);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--navy-blue);
    margin-bottom: 1rem;
  }

  ul {
    list-style-position: inside;
    margin-top: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: var(--navy-blue);
  margin-bottom: 2rem;
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'IPO Information Web Application',
      description: 'Built a web application providing IPO details with responsive design principles for seamless usage across devices.',
      technologies: 'Django, React.js, REST APIs'
    },
    {
      title: 'Other Projects',
      description: 'Collection of various web development projects:',
      list: [
        'JS Calculator: A dynamic calculator built using vanilla JavaScript',
        'Drum Machine: A fun, interactive music player using JS event handling',
        'Random Quote Generator: Generates random quotes with a button click',
        'Article Summarizer: Summarizes lengthy articles using Python and web scraping techniques',
        'Random Password Generator: Generates random passwords of the desired length'
      ]
    }
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.technologies && <p>Technologies: {project.technologies}</p>}
            {project.list && (
              <ul>
                {project.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
