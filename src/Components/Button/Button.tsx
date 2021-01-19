import React from 'react';
import styled from "styled-components";

interface IButton {
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean
}

const Button: React.FC<IButton> = (props) => {
    return(
        <StyledButton
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
  width: 100%;
  display: block;
  padding: 23px 0 24px 0;
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 88px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  color: black;
  font-weight: 700;
  
  &:active{
    background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
    box-shadow: inset -2px -4px 12px #FFFFFF, inset 2px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled{
    opacity: 0.5;
  }
`

export default Button;
