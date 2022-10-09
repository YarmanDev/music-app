import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children: React.ReactNode;
  cutText?: boolean; // cut string to ole line and add three dots at the end
  className?: string;
}

export const Text = (props: TextProps) => {
  const { children, cutText = false, className } = props;
  return (
    <CustomText cutText={cutText} className={className}>
      {children}
    </CustomText>
  );
};

const CustomText = styled.p<{ cutText: boolean }>`
  margin: 0;
  text-overflow: ${({ cutText }) => (cutText ? 'ellipsis' : 'clip')};
  overflow: ${({ cutText }) => (cutText ? 'hidden' : 'visible')};
  width: ${({ cutText }) => (cutText ? '100%' : 'auto')};
  white-space: ${({ cutText }) => (cutText ? 'nowrap' : 'normal')};
`;
