import React from "react";
import styled from "styled-components";
import inlinePerson from '../../Assets/inlineSvg/inlinePerson'

import ExerciseSentence from "../ExerciseSentence";
import {WordType} from "../../Assets/data";

interface IExerciseDisplay {
    words: Array<WordType>
}

const ExerciseDisplay: React.FC<IExerciseDisplay> = ({ words }) => {
    return(
        <ExerciseDisplayContainer>
            <ExerciseDisplayPerson>
                {inlinePerson}
            </ExerciseDisplayPerson>

            <ExerciseDisplayDialog>
                <ExerciseSentence item={words} />

                <ExerciseDisplayDialogTriangle />
            </ExerciseDisplayDialog>
        </ExerciseDisplayContainer>
    )
}

const ExerciseDisplayContainer = styled.div`
  display: flex;
  min-height: 208px;
`

const ExerciseDisplayPerson = styled.div`
  width: 185px;
  height: 200px;
  margin-top: auto;
`

const ExerciseDisplayDialog = styled.div`
  width: 100%;
  margin-bottom: 119px;
  position: relative;
  padding: 17px 24px;
  margin-left: 14px;
  border: 2px solid #252525;
  border-radius: 20px 20px 20px 10px;
`

const ExerciseDisplayDialogTriangle = styled.div`
  position: absolute;
  left: -22px;
  bottom: 8px;
  width: 20px;
  height: 17px;
  border-bottom: 2px solid #252525;
  border-right: 2px solid white;
  border-bottom-left-radius: 2px;
  &::before{
    content: '';
    position: absolute;
    height: 28px;
    width: 2px;
    top: -5px;
    right: 8px;
    transform: rotate(50deg);
    background-color: #252525;
    border-radius: 5px;
  }
`

export default ExerciseDisplay;

