import React from "react";
import WordBadge from "../WordBadge";

import './WordBadgesPallet.css';
import {WordType} from "../../Assets/data";
import BadgeDropCell from "../BadgeDropCell";


interface IWordBadgesPallet {
    items: Array<WordType>,
    onDrop: Function,
    rows: number
}

export type PalletDropItem = {
    type: string,
    object: WordType,
}

const WordBadgesPallet: React.FC<IWordBadgesPallet> = (props) => {
    //TODO: Заменить для адаптива
    const cellNumber = props.rows * 6;
    const cells = [];
    for(let i = 0; i < cellNumber; i++){
        const item = props.items.find(item => {
            return item.order === (i + 1)
        });

        if(!item){
            cells.push(
                <BadgeDropCell
                    type="on-check-word"
                    order={i + 1}
                    onDrop={props.onDrop}
                />
            );
            continue;
        }
        cells.push(
            <BadgeDropCell
                type="on-check-word"
                order={i}
                onDrop={() => {}}
            >
                <WordBadge
                    key={i}
                    type="pallet-word"
                    word={item}
                />
            </BadgeDropCell>
        );
    }

    return(
        <div
            className="word-badges-pallet-container"
        >
            {cells}
        </div>
    )
}

export default WordBadgesPallet;
