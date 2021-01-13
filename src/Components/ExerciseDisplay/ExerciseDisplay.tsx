import React from "react";
import inlinePerson from '../../Assets/inlineSvg/inlinePerson'

import './ExerciseDisplay.css';
import ExerciseSentence from "../ExerciseSentence";
import {WordType} from "../../Assets/data";

interface IExerciseDisplay {
    words: Array<WordType>
}

const ExerciseDisplay: React.FC<IExerciseDisplay> = ({ words }) => {
    return(
        <div className="exercise-display-container">
            <div className="exercise-display-person">
                {inlinePerson}
            </div>

            <div className="exercise-display-dialog">
                <div className="exercise-display-dialog-sentence">
                    <ExerciseSentence item={words} />
                </div>

                <div className="exercise-display-dialog-triangle" />
            </div>
        </div>
    )
}

export default ExerciseDisplay;

