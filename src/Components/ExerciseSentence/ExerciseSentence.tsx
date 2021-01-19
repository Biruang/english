import React from "react";

import {WordType} from "../../Assets/data";
import WordWithTranslation from "../WordWithTranslation";
import styled from "styled-components";

interface IExerciseSentence {
    item: Array<WordType>
}

const ExerciseSentence: React.FC<IExerciseSentence> = ({ item }) => {
    return (
        <ExerciseSentenceContainer>
            {
                item.map((i, index) => <WordWithTranslation key={index} text={i.text} translation={i.translation} />)
            }
        </ExerciseSentenceContainer>
    )
}

const ExerciseSentenceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 21px;
`

export default ExerciseSentence;
