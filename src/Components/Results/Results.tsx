import React from "react";

import './Results.css';

interface IResults {
    shown: boolean,
    correct: boolean
}

const Results: React.FC<IResults> = (props) => {
    if(props.shown){
        return(
            <div
                className={props.correct ? "results-correct" : "results-wrong"}
            >
                {props.correct ? "Верно!" : "Что-то не так!"}
            </div>
        );
    } else {
        return null;
    }
}

export default Results;
