import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import About from './About.jsx';



const MainBody = styled.div`
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: space-between;
  padding: 2rem;
  height: 100%;
`;

const AppPreview = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 6rem;
`;

const Description = styled.p`
  font-size: 2.5rem;
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 100px;
  padding: 10px 20px;
  color: #282c34;
  background-color: white;
  border: none;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 2.5rem;

  &:hover {
    background-color: #ddd;
  }
`;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

function App() {
  return (
    <MainBody>
      <Header />
      <Section1>
        <Content>
          <Title>Welcome to Handy!</Title>
          <Description>Map Your Projects, Simplifying Your Life</Description>
        </Content>
        <AppPreview src="assets/Fist.png" alt="App preview" />
        <DownloadLink href="https://www.apple.com/app-store/">
          Download on the App Store
        </DownloadLink>
      </Section1>
      <About />
    </MainBody>
  );
}

export default App;
