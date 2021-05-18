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

const SearchBarLayout = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  align-items: center;
`;
SearchBarLayout.displayName = 'SearchBarLayout';

const Label = styled.label`
  font-size: 12px;
  margin-right: 8px;
`;
Label.displayName = 'Label';

const InputRoot = styled.input`
  min-width: 50%;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
`;
InputRoot.displayName = 'InputRoot';

export const SearchBar: React.FC<SearchBarProps> = ({className, label, value, placeholder, ...props}) => {
  return (
    <SearchBarLayout>
      {label && <Label htmlFor="searchOrder">{label}</Label>}
      <InputRoot id="searchOrder" className={className} value={value} placeholder={placeholder} {...props} />
    </SearchBarLayout>
  );
};
