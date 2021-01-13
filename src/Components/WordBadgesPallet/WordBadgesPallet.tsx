import React from "react";
import WordBadge from "../WordBadge";

import './WordBadgesPallet.css';
import {WordType} from "../../data/fakeStorage";

interface IWordBadgesPallet {
    items: Array<WordType>
}

const WordBadgesPallet: React.FC<IWordBadgesPallet> = ({items}) => {
    return(
        <div className="word-badges-pallet-container">
            {
                items.map(item => <WordBadge word={item.text} />)
            }
        </div>
    )
}

export default WordBadgesPallet;
