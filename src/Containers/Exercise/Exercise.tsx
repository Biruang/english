import React from "react";
import ExerciseDisplay from "../../Components/ExerciseDisplay/ExerciseDisplay";
import SentenceConstructor from "../../Components/SentenceConstructor";
import Button from "../../Components/Button";

import './Exercise.css';

const Exercise: React.FC = () => {
    return (
        <div className="exercise-container">
            <h1 className="exercise-header">
                Переведите предложение
            </h1>

            <div className="exercise-display-wrap">
                <ExerciseDisplay />
            </div>

            <div className="exercise-constructor-wrap">
                <SentenceConstructor />
            </div>

            <div className="exercise-button-wrap">
                <Button>
                    <span>Проверить</span>
                </Button>
            </div>
        </div>
    );
}

export default Exercise;
