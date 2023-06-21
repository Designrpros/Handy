import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  background-color: transparent;
  color: white;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
  padding: 20px;
`;


function Header() {
  return (
    <StyledHeader>
      <Logo src="src/assets/fist1.png" alt="Logo" />
      <h1>Handy</h1>
    </StyledHeader>
  );
}


export default Header;
