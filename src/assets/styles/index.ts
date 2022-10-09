import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: ${({ padding }) => padding ?? '0 10px'};
  max-width: ${({ theme }) => theme.breakpoints.sm}px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration-color: transparent;
  color: ${({ theme }) => theme.colors.text};
`;
