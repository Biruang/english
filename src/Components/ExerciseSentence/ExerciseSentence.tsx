import React from "react";

import './ExerciseSentence.css';
import {WordType} from "../../data/fakeStorage";
import WordWithTranslation from "../WordWithTranslation";

interface IExerciseSentence {
    item: Array<WordType>
}

const ExerciseSentence: React.FC<IExerciseSentence> = ({ item }) => {
    return (
        <div className="exercise-sentence-container">
            {
                item.map(i => <WordWithTranslation text={i.text} translation={i.translation} />)
            }
        </div>
    )
}

export default ExerciseSentence;
