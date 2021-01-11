import React from "react";
import inlinePerson from '../../Assets/inlineSvg/inlinePerson'

import './ExerciseDisplay.css';
import ExerciseSentence from "../ExerciseSentence";

const ExerciseDisplay: React.FC = () => {
    return(
        <div className="exercise-display-container">
            <div className="exercise-display-person">
                {inlinePerson}
            </div>

            <div className="exercise-display-dialog">
                <ExerciseSentence />

                <div className="exercise-display-dialog-triangle" />
            </div>
        </div>
    )
}

export default ExerciseDisplay;

