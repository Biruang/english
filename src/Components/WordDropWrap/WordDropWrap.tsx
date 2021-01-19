import React from "react";
import {WordCellDropType} from "../WordCell/WordCell";
import {useDrop} from "react-dnd";

interface IDropWrap {
    type: string,
    onDrop: (item: WordCellDropType) => void,
}

const WordDropWrap: React.FC<IDropWrap> = (props) => {
    const [, drop] = useDrop({
        accept: props.type,
        drop: (item: WordCellDropType) => {
            props.onDrop(item)
        },
    })

    return(
        <div ref={drop}>
            {props.children}
        </div>
    )
}

export default WordDropWrap;
