import React from "react";
import WordBadge from "../WordBadge";

import './WordBadgesPallet.css';
import {WordType} from "../../Assets/data";

interface IWordBadgesPallet {
    items: Array<WordType>
}

const WordBadgesPallet: React.FC<IWordBadgesPallet> = ({items}) => {
    const cellNumber = Math.ceil(items.length / 6) * 6
    const cells = [];

    for(let i = 0; i < cellNumber; i++){
        if(i > items.length - 1){
            cells.push(<WordBadge empty />);
            continue;
        }
        cells.push(<WordBadge draggable word={items[i]} />)
    }

    return(
        <div className="word-badges-pallet-container">
            {cells}
        </div>
    )
}

export default WordBadgesPallet;
