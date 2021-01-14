import React, {forwardRef, createRef} from "react";
import {useDrag, useDrop} from 'react-dnd';

import './WordBadge.css';
import {WordType} from "../../Assets/data";
import {PalletDropItem} from "../WordBadgesPallet/WordBadgesPallet";
import AnimateReorder from "../AnimateReorder";

interface IWordBadge {
    word?: WordType,
    empty?: boolean,
    onDrag?: Function,
    onDrop?: Function,
    type: string,
    ref?: any
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

    const RefWrap = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(({ children }, ref) => (
       <div ref={ref}>
           {children}
       </div>
    ));

    return(
        <div
            className="word-badge-container"
        >
            {
                !props.empty ? (
                    <div
                        ref={drag}
                        style={{display: isDragging ? "none" : "block"}}
                    >
                        <AnimateReorder>
                            <RefWrap ref={createRef()} key={props.word && props.word.order}>
                                <div
                                    className="word-badge"
                                >
                                    {props.word && props.word.text}
                                </div>
                            </RefWrap>
                        </AnimateReorder>
                    </div>
                ): null
            }
        </div>
    )
}

export default WordBadge;
