import React from 'react';
import styled from "styled-components";
import {useDrag, useDrop} from "react-dnd";

interface ICell {
    readonly isEmpty: boolean,
    readonly isDragging: boolean
}

interface IWordCell {
    dragType?: string,
    id?: number
}

export type WordCellDropType = {
    type: string,
    id: number
}

const WordCell: React.FC<IWordCell> = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: props.dragType ? props.dragType : "",
            id: props.id
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })
    // const [, drop] = useDrop({
    //     accept: props.dropType ? props.dropType : "",
    //     drop: (item: DropItemType) => {
    //         props.onDrop && props.onDrop(item.id, props.order);
    //     }
    // })

    return(
        <Cell
            isDragging={isDragging}
            isEmpty={!props.children}
            ref={drag}
        >
            {props.children}
        </Cell>
    )
}

const Cell = styled.div<ICell>`
  position: relative;
  width: 44px;
  height: 21px;
  padding: 4px 13px 5px 13px;
  border-radius: 15px;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  border: ${({isEmpty, isDragging}) => isEmpty || isDragging ? '1px solid transparent' : '1px solid #C9C9C9'};
  background-color: ${({isEmpty, isDragging}) => isEmpty || isDragging ? '#E6E6E6' : '#FFFFFF'} ;
  box-shadow: ${({isEmpty, isDragging}) => isEmpty || isDragging ? 'inset 0 8px 4px -6px rgba(0, 0, 0, 0.25)'
    : '0 8px 4px -6px rgba(0, 0, 0, 0.25)'};
  color: ${({isDragging}) => isDragging ? 'transparent' : '#000'}
`

export default WordCell;
