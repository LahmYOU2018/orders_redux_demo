/** @format */

import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

export interface SearchBarProps {
  className?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Label = styled.label`
  font-size: 12px;
`;

const InputRoot = styled.input`
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
`;

export const SearchBar: React.FC<SearchBarProps> = ({className, label, value, placeholder, ...props}) => {
  return (
    <>
      {label && <Label htmlFor="searchOrder">{label}</Label>}
      <InputRoot id="searchOrder" className={className} value={value} placeholder={placeholder} {...props} />
    </>
  );
};
