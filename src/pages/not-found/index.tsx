import React from 'react';
import styled from 'styled-components';
import { Text } from '../../components';

export const NotFound = () => {
  return (
    <Container>
      <CustomText>404</CustomText>
      <CustomText>This page does not exist</CustomText>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
`;
const CustomText = styled.div`
  font-size: 40px;
  opacity: 0.5;
  text-align: center;
`;
