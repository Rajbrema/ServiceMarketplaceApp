import React from 'react';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: 10px;
`;

const SearchInput = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search for services..." />
    </SearchContainer>
  );
};

export default SearchBar;
