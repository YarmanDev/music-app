import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IThemeColors } from '../types';
import { Text, ToggleTabs } from '../components';
import { Wrapper } from '../assets';
import { Link } from 'react-router-dom';
interface HeaderProps {
  theme: IThemeColors;
  setTheme: Dispatch<SetStateAction<IThemeColors>>;
}

export const Header = (props: HeaderProps) => {
  const { theme, setTheme } = props;
  return (
    <Container>
      <Wrapper>
        <ContainerHeader>
          <Link to={'/'}>
            <Title>Spotify</Title>
          </Link>
          <ToggleTabs
            tabs={['light', 'dark']}
            value={theme}
            onChange={(value) => setTheme(value)}
          />
        </ContainerHeader>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;

const ContainerHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: underline;
  font-size: 20px;
`;
