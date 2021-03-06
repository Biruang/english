import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {WordType} from "../../Assets/data";
import WordCell from "../WordCell";
import {WordCellDropType} from "../WordCell/WordCell";
import {useDrop} from "react-dnd";

interface IOnCheckList {
    items: Array<WordType>,
    rows: number,
    onDrop: (item: WordCellDropType) => void,
    type: string
}

const OnCheckList: React.FC<IOnCheckList> = (props) => {
    const [, drop] = useDrop({
        accept: props.type,
        drop: (item: WordCellDropType) => {
            props.onDrop(item)
        },
    })

    const calculateDividers = useCallback((rows: number) => {
        const newDividers = [];
        for(let i = 1; i <= rows - 1; i++){
            newDividers.push(
                <OnCheckListDivider
                    key={i}
                    top={i * 48}
                />
            );
        }
        return newDividers;
    }, [])

    const [dividers, setDividers] = useState(calculateDividers(props.rows))

    useEffect(() => {
        setDividers(calculateDividers(props.rows))
    }, [props.rows, calculateDividers])

    return(
        <OnCheckListContainer
            rows={props.rows}
            ref={drop}
        >
            {
                props.items.map((item, index) => (
                    <WordCell
                        key={item.id}
                        dragType="on-check-word"
                        id={item.id}
                    >
                        {item.text}
                    </WordCell>
                ))
            }
            {dividers}
        </OnCheckListContainer>
    )
}

const OnCheckListContainer = styled.div<{ rows: number }>`
  min-height: 32px;
  height: ${({rows}) => `${rows * 32 + 16 * (rows - 1)}px`};
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
  column-gap: 7px;
  row-gap: 15px;
  position: relative;

  border-top: 1px solid #4B4B4B;
  border-bottom: 1px solid #4B4B4B;
`

const OnCheckListDivider = styled.div<{ top: number }>`
  position: absolute;
  width: 100%;
  border-top: 1px solid #4B4B4B;
  top: ${({top}) => `${top}px`}
`

export default OnCheckList;
