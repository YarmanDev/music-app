import React from 'react';
import styled from 'styled-components';
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Input = (props: InputProps) => {
  const { value, onChange, placeholder = '', className } = props;
  return (
    <CustomInput
      className={className}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      type='text'
    />
  );
};

const CustomInput = styled.input`
  outline: transparent;
  border: transparent;
  border-radius: 5px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;
