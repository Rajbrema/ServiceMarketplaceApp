import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  padding: 20px;
  background-color: #4CAF50;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Service Marketplace</Title>
    </HeaderContainer>
  );
};

export default Header;
