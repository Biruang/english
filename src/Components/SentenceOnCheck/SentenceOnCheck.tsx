import React, {DragEvent} from "react";
import {useDrop} from "react-dnd";

import './SentenceOnCheck.css';
import {WordType} from "../../Assets/data";
import WordBadge from "../WordBadge";

interface ISentenceOnCheck {
    items: Array<WordType>,
    onDrop?: Function,
    rows: number
}

export type OnCheckDropItem = {
    type: string,
    object: WordType,

}

const SentenceOnCheck: React.FC<ISentenceOnCheck> = (props) => {
    const [{droppedItem, isOver}, drop] = useDrop({
        accept: "pallet-word",
        drop: (item: OnCheckDropItem) => {
            props.onDrop && props.onDrop(item)
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            droppedItem: monitor.getItem()
        })
    })

    const dividers = [];
    for(let i = 1; i <= props.rows - 1; i++){
        dividers.push(
            <div
                className="sentence-on-check-divider"
                style={{top: i * 48}}
            />
            );
    }
    return(
        <div
            ref={drop}
            className="sentence-on-check-container"
            style={{height: props.rows * 40}}
        >
            {
                props.items.map(item => <WordBadge type="on-check-word" word={item} />)
            }
            {dividers}
        </div>
    )
}

export default SentenceOnCheck;
