import React from "react";

import './WordBadge.css';

interface IWordBadge {
    word: string
}

const WordBadge: React.FC<IWordBadge> = ({word}) => {
    return(
        <div draggable className="word-badge">
            {word}
        </div>
    )
}

export default WordBadge;
