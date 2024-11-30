import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faUser } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../images/Profile (1).png';
const Nav = styled.nav`
  width: 250px;
  background-color: var(--white);
  padding: 2rem;
  border-right: 1px solid #eee;
  position: fixed;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: static;
    padding: 1rem;
  }
`;

const Profile = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  background-color: var(--navy-blue);
  border: 3px solid var(--navy-blue);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--gray);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover, &.active {
    background-color: var(--navy-blue);
    color: var(--white);
  }

  svg {
    margin-right: 10px;
  }
`;

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Profile>
        <ProfileImg>
          <img src={profileImage} alt="Eshwar Manideep" />
        </ProfileImg>
      </Profile>
      <NavLinks>
        <NavItem>
          <NavLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <FontAwesomeIcon icon={faCode} /> Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <FontAwesomeIcon icon={faUser} /> About Me
          </NavLink>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
