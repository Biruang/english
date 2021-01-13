import React, {DragEvent} from "react";
import {useDrop} from "react-dnd";

import './SentenceOnCheck.css';
import {WordType} from "../../Assets/data";
import WordBadge from "../WordBadge";

interface ISentenceOnCheck {
    items: Array<WordType>
}

const SentenceOnCheck: React.FC<ISentenceOnCheck> = ({ items }) => {
    const [{droppedItem, isOver}, drop] = useDrop({
        accept: "word",
        drop: (item, monitor) => {
            console.log(item);
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            droppedItem: monitor.getItem()
        })
    })

    return(
        <div
            ref={drop}
            className="sentence-on-check-container"
        >
            {
                items.map(item => <WordBadge word={item} />)
            }
        </div>
    )
}

export default SentenceOnCheck;
