import React from 'react';
import styled from 'styled-components/native';

const ServiceContainer = styled.View`
  padding: 10px;
`;

const ServiceCardContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ServiceDescription = styled.Text`
  font-size: 16px;
  color: #555;
`;

const ServiceCard = () => {
  const services = [
    { id: '1', title: 'John Doe', description: 'Experienced cook available for personal cooking.' },
    { id: '2', title: 'Jane Smith', description: 'Reliable babysitter with 5 years of experience.' },
    // Add more services as needed
  ];

  return (
    <ServiceContainer>
      {services.map((service) => (
        <ServiceCardContainer key={service.id}>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCardContainer>
      ))}
    </ServiceContainer>
  );
};

export default ServiceCard;
