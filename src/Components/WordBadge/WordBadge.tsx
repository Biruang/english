import React from "react";
import {useDrag} from 'react-dnd';

import './WordBadge.css';
import {WordType} from "../../Assets/data";

interface IWordBadge {
    word: WordType,
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
            ref={drag}
            style={{display: isDragging ? "none" : "block"}}
            key={props.word.initialOrder}
            className="word-badge"
        >
            {props.word.translation}
        </div>
    )
}

export default WordBadge;
