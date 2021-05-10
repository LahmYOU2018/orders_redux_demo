/** @format */

import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import DEFAULT_STYLE from '../../utils/common';

export interface SearchBarProps {
  className?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputBase = styled.input`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: ${DEFAULT_STYLE.color.dark};
  background-color: ${DEFAULT_STYLE.color.light};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 24px;
`;

export const SearchBar: React.FC<SearchBarProps> = ({className, label, value, placeholder, ...props}) => {
  return (
    <>
      {label && <label htmlFor="searchOrder">{label}</label>}
      <InputBase id="searchOrder" className={className} value={value} placeholder={placeholder} {...props} ></InputBase>
    </>
  );
};
