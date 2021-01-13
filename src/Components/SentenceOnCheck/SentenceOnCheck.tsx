import React from "react";

import './SentenceOnCheck.css';
import {WordType} from "../../data/fakeStorage";
import WordBadge from "../WordBadge";

interface ISentenceOnCheck {
    items: Array<WordType>
}

const SentenceOnCheck: React.FC<ISentenceOnCheck> = ({ items }) => {
    return(
        <div className="sentence-on-check-container">
            {
                items.map(item => <WordBadge word={item.text} />)
            }
        </div>
    )
}

export default SentenceOnCheck;
