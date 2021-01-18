import React from "react";
import {useDrop} from "react-dnd";
import {WordType} from "../../Assets/data";
import WordBadge from "../WordBadge";

import './SentenceOnCheck.css';

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
    const [, drop] = useDrop({
        accept: "pallet-word",
        drop: (item: OnCheckDropItem) => {
            props.onDrop && props.onDrop(item)
        },
    })

    const dividers = [];
    for(let i = 1; i <= props.rows - 1; i++){
        dividers.push(
            <div
                key={i}
                className="sentence-on-check-divider"
                style={{top: i * 48}}
            />
        );
    }

    return(
        <div
            ref={drop}
            className="sentence-on-check-container"
            style={{height: props.rows * 32 + 16 * (props.rows - 1)}}
        >
            {
                props.items.map((item, index) => (
                    <WordBadge
                        key={item.id}
                        type="on-check-word"
                        word={item}
                    />
                ))
            }
            {dividers}
        </div>
    )
}

export default SentenceOnCheck;
