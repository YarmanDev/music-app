import React from 'react';
import styled from 'styled-components';

enum ISides {
  top = 0,
  bottom = 180,
  left = 270,
  right = 90,
}
interface TriangleProps {
  side: keyof typeof ISides;
}

export const Triangle = (props: TriangleProps) => {
  const { side } = props;
  return <Container rotate={ISides[side]} />;
};

const Container = styled.div<{ rotate: number }>`
  transform: rotate(${({ rotate }) => rotate}deg);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 7.5px 11px 7.5px;
  border-color: transparent transparent ${({ theme }) => theme.colors.secondary}
    transparent;
`;
