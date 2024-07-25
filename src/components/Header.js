// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #021e3d;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <HeaderWrapper>
    <h1 style={{ color: '#fff' }}>Test Case Management</h1>
  </HeaderWrapper>
);

export default Header;
