import React, {ReactNode, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {WordType} from "../../Assets/data";
import WordCell from "../WordCell";
import {WordCellDropType} from "../WordCell/WordCell";

interface IWordsPallet {
    items: Array<WordType>,
    onDrop: (item: WordCellDropType, order: number) => void,
    rows: number
}

const WordsList: React.FC<IWordsPallet> = (props) => {
    const calculateCells = useCallback((
        items: Array<WordType>,
        rows: number,
        onDrop: (item: WordCellDropType, order: number) => void
    ): Array<ReactNode> => {
        const cellNumber = rows * 6;
        let newCells = [];
        for(let i = 0; i < cellNumber; i++){
            const item = items.find(item => {
                return item.order === (i + 1)
            });

            if(!item){
                newCells.push(
                    <WordCell
                        key={i}
                        dropType="on-check-word"
                        onDrop={(item) => onDrop(item, i + 1)}
                    />
                );
                continue;
            }
            newCells.push(
                <WordCell
                    key={i}
                    dropType="on-check-word"
                    dragType="pallet-word"
                    id={item.id}
                    order={item.order}
                    prevOrder={item.prevOrder}
                >
                    {item.text}
                </WordCell>
            );
        }
        return newCells;
    }, []);

    const [cells, setCells] = useState<Array<ReactNode>>(calculateCells(props.items, props.rows, props.onDrop));

    useEffect(() => {
        setCells(calculateCells(props.items, props.rows, props.onDrop));
    }, [props.items, props.rows, props.onDrop, calculateCells])

    return(
        <Pallet>
            {cells}
        </Pallet>
    )
}

const Pallet = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 7px;
  row-gap: 15px;
`

export default WordsList;
