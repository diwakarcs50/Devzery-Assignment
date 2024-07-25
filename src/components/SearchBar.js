
import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 400px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #ff4081;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SearchBar = () => (
  <SearchWrapper>
    <SearchInput type="text" placeholder="Search issue..." />
    <SearchButton>Search</SearchButton>
  </SearchWrapper>
);

export default SearchBar;
