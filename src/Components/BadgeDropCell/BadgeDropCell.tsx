import React from "react";
import {useDrop} from "react-dnd";

import './DropWrapper.css';

interface IDropWrapper {
    type: string,
    order: number,
    onDrop: Function,
}

const BadgeDropCell: React.FC<IDropWrapper> = (props) => {
    const [, drop] = useDrop({
        accept: props.type,
        drop: item => {
            props.onDrop(item, props.order);
        }
    })

    return(
        <div
            ref={drop}
            className="badge-drop-cell"
        >
            {props.children}
        </div>
    )
}

export default BadgeDropCell;
