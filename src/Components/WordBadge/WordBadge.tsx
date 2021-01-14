import React from "react";
import {useDrag, useDrop} from 'react-dnd';

import './WordBadge.css';
import {WordType} from "../../Assets/data";
import {PalletDropItem} from "../WordBadgesPallet/WordBadgesPallet";

interface IWordBadge {
    word?: WordType,
    empty?: boolean,
    onDrag?: Function,
    onDrop?: Function,
    type: string
}

const WordBadge: React.FC<IWordBadge> = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: props.type,
            object: props.word
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return(
        <div
            className="word-badge-container"
        >
            {
                !props.empty ? (
                    <div
                        ref={drag}
                        className="word-badge"
                        style={{display: isDragging ? "none" : "block"}}
                    >
                        {props.word && props.word.text}
                    </div>
                ): null
            }
        </div>
    )
}

export default WordBadge;
