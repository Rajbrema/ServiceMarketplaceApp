import React from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';

const categories = [
  { id: '1', name: 'Personal Cook' },
  { id: '2', name: 'Babysitting' },
  { id: '3', name: 'Senior Care' },
  { id: '4', name: 'Dog Walking' },
  { id: '5', name: 'Event Organizers' },
  { id: '6', name: 'Personal Driving' }
];

const CategoryContainer = styled.View`
  padding: 10px;
`;

const CategoryItem = styled.View`
  background-color: #f8f8f8;
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
`;

const CategoryName = styled.Text`
  font-size: 18px;
`;

const CategoryList = () => {
  return (
    <CategoryContainer>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem>
            <CategoryName>{item.name}</CategoryName>
          </CategoryItem>
        )}
      />
    </CategoryContainer>
  );
};

export default CategoryList;
