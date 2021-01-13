import React from "react";
import {useDrag} from 'react-dnd';

import './WordBadge.css';
import {WordType} from "../../Assets/data";

interface IWordBadge {
    word?: WordType,
    draggable?: boolean,
    empty?: boolean
}

const WordBadge: React.FC<IWordBadge> = (props) => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: {
            type: "word",
            object: props.word
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return(
        <div
            ref={drag}
            draggable={props.draggable}
            className={isDragging || props.empty ? "word-badge-dragged" : "word-badge"}
        >
            {props.word && props.word.text}
        </div>
    )
}

export default WordBadge;
