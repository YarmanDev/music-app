import React from 'react';
import styled from 'styled-components';
import { IThemeColors } from '../types';

interface ToggleTabsProps {
  tabs: IThemeColors[];
  value: string;
  onChange: (value: IThemeColors) => void;
}

export const ToggleTabs = (props: ToggleTabsProps) => {
  const { tabs, value, onChange } = props;
  return (
    <Container>
      {tabs.map((tab) => (
        <CustomTab
          key={tab}
          isActive={tab === value}
          onClick={() => onChange(tab)}
        >
          {tab}
        </CustomTab>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;
const CustomTab = styled.div<{
  isActive: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.primary};
`;
