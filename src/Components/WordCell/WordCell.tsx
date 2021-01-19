import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useDrag, useDrop} from "react-dnd";

interface ICell {
    readonly isEmpty: boolean,
    readonly isDragging: boolean,
}

export type WordCellDropType = {
    type: string,
    id: number
}

interface IWordCell {
    dropType?: string,
    dragType?: string,
    onDrop?: (item: WordCellDropType) => void
    id?: number
    order?: number,
    prevOrder?:number,
}

const WordCell: React.FC<IWordCell> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: props.dropType || "",
        drop: (item: WordCellDropType) => {
            props.onDrop && props.onDrop(item)
        },
    })
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: props.dragType ? props.dragType : "",
            id: props.id
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    useEffect(() => {
        console.log(props.order, props.prevOrder);
        if(props.order && props.prevOrder && (props.prevOrder !== props.order)){
            const domNode = ref.current;
            const row = Math.ceil(props.order/6);
            const prevRow = Math.ceil(props.prevOrder/6);
            const changeY = (prevRow - row) * 35;
            let changeX = 0;
            if(changeY > 0){
                changeX = (props.prevOrder - props.order - (prevRow - 1) * 6) * 79;
            }
            if(changeY < 0){
                changeX = (props.prevOrder - props.order % 6 - (prevRow - 1) * 6) * 79;
            }
            if(changeY === 0){
                changeX = (props.prevOrder - props.order) * 79;
            }

            if(domNode){
                requestAnimationFrame(() => {
                    domNode.style.transform = `translate(${changeX}px, ${changeY}px)`;
                    domNode.style.transition = "transform 0s";
                    domNode.style.zIndex = '5';
                    domNode.style.position = 'relative';

                    requestAnimationFrame(() => {
                        domNode.style.zIndex = '3';
                        domNode.style.transform = "";
                        domNode.style.transition = "transform 600ms";
                    })
                })
            }
        }
    }, [props.id, props.order, props.prevOrder, ref])

    return(
        <CellContainer ref={drop}>
            <div ref={ref}>
                <Cell
                    isDragging={isDragging}
                    isEmpty={!props.children}
                    ref={drag}
                >
                    {props.children}
                </Cell>
            </div>
            <CellBackground />
        </CellContainer>
    )
}

const CellContainer = styled.div`
    position: relative;
    width: 72px;
    height: 32px;
`

const Cell = styled.div<ICell>`
  position: relative;
  width: 44px;
  height: 21px;
  padding: 4px 13px 5px 13px;
  border-radius: 15px;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  z-index: 3;
  display: ${({isEmpty, isDragging}) => isEmpty || isDragging ? 'none' : 'block'} ;
  border: 1px solid #C9C9C9;
  background-color: #FFFFFF ;
  box-shadow: 0 8px 4px -6px rgba(0, 0, 0, 0.25);
  color: ${({isDragging}) => isDragging ? 'transparent' : '#000'};
`

const CellBackground = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 70px;
  height: 30px;
  background: #E6E6E6;
  box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export default WordCell;
