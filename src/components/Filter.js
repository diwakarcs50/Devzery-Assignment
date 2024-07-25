
import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Filter = () => (
  <FilterWrapper>
    <FilterButton>Filter</FilterButton>
  </FilterWrapper>
);

export default Filter;
