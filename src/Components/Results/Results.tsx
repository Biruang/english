import React from "react";
import styled from "styled-components";

interface IResults {
    shown: boolean,
    correct: boolean
}

const Results: React.FC<IResults> = (props) => {
    if(props.shown){
        return(
            <StyledResults correct={props.correct}>
                {props.correct ? "Верно!" : "Что-то не так!"}
            </StyledResults>
        );
    } else {
        return null;
    }
}

const StyledResults = styled.div<{correct: boolean}>`
  font-size: 24px;
  line-height: 28px;
  text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5);
  text-align: center;
  margin-bottom: 5px;
  color: ${({correct}) => correct ? "#00ff0d" : "#FF0000"}
`

export default Results;
