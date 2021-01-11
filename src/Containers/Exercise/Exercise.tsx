import React from "react";
import ExerciseDisplay from "../../Components/ExerciseDisplay/ExerciseDisplay";
import SentenceConstructor from "../../Components/SentenceConstructor";
import Button from "../../Components/Button";

const Exercise: React.FC = () => {
    return (
        <div>
            <h1>
                Переведите предложение
            </h1>

            <div>
                <ExerciseDisplay />
            </div>

            <div>
                <SentenceConstructor />
            </div>

            <div>
                <Button>
                    <span>Проверить</span>
                </Button>
            </div>
        </div>
    );
}

export default Exercise;
