import React, {useState} from "react";
import WordBadge from "../WordBadge";
import {useDrop} from "react-dnd";

import './WordBadgesPallet.css';
import {WordType} from "../../Assets/data";


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
    const [{droppedItem, isOver}, drop] = useDrop({
        accept: "on-check-word",
        drop: (item: PalletDropItem) => {
          props.onDrop && props.onDrop(item);
        },
        collect: monitor => ({
            droppedItem: monitor.getItem(),
            isOver: monitor.isOver()
        })
    })

    const onBadgeDrop = (item: PalletDropItem) => {
        debugger
    }

    //TODO: Заменить для адаптива
    const cellNumber = props.rows * 6;
    const cells = [];
    for(let i = 0; i < cellNumber; i++){
        const item = props.items.find(item => {
            return item.order === (i + 1)
        });

        if(!item){
            cells.push(<WordBadge onDrop={onBadgeDrop} type="pallet-word" empty />);
            continue;
        }
        cells.push(<WordBadge type="pallet-word" word={item} />)
    }

    return(
        <div
            ref={drop}
            className="word-badges-pallet-container"
        >
            {cells}
        </div>
    )
}

export default WordBadgesPallet;
