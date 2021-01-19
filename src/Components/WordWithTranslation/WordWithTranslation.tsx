import React from "react";
import styled from "styled-components";

export interface IWordWithTranslation {
    text: string,
    translation: string
}

const WordWithTranslation: React.FC<IWordWithTranslation> = (props) => {
    return (
        <StyledWord>
            {props.text}
        </StyledWord>
    )
}

const StyledWord = styled.div`
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  border-bottom: 1px dashed #000000;
  cursor: default;
`

export default WordWithTranslation;
