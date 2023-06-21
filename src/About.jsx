import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0 10%;
  background-color: #282c34;
  color: white;

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  height: 50vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ReversedRow = styled(Row)`
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  min-width: 500px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.5;

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 992px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;


const Spacer = styled.div`
  height: 200px;
`;

function About() {
  return (
    <AboutContainer>
      <Row>
        <Column>
          <Description>
            Handy is an innovative app that provides a map of all ongoing projects and detailed information about each project. 
            It's designed to help you keep track of your projects and simplify your life.
          </Description>
        </Column>
        <Column>
          <Image src="src/assets/Handy.png" alt="Handy App" />
        </Column>
      </Row>
      <Spacer />
      <ReversedRow>
        <Column>
          <Description>
            Handy allows you to view all your ongoing projects on a map, providing you with a clear visual representation of your work. 
            You can click on any project to get more detailed information, making it easier than ever to stay organized and on top of your tasks.
          </Description>
        </Column>
        <Column>
          <Image src="src/assets/Handy.png" alt="Handy App" />
        </Column>
      </ReversedRow>
    </AboutContainer>
  );
}

export default About;
