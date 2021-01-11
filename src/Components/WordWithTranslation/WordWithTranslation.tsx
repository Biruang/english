import React from "react";

import './WordWithTranslation.css';

export interface IWordWithTranslation {
    word: string,
    translation: string
}

const WordWithTranslation: React.FC<IWordWithTranslation> = (props) => {
    return (
        <React.Fragment>
            <div>
                {props.word}
            </div>
        </React.Fragment>
    )
}

export default WordWithTranslation;
