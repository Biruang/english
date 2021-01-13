import React from "react";

import './WordWithTranslation.css';

export interface IWordWithTranslation {
    text: string,
    translation: string
}

const WordWithTranslation: React.FC<IWordWithTranslation> = (props) => {
    return (
        <div className="word-with-translation">
            {props.text}
        </div>
    )
}

export default WordWithTranslation;
