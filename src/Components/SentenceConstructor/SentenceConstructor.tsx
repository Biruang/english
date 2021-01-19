import React from "react";
import styled from "styled-components";
import {WordType} from "../../Assets/data";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import OnCheckList from "../OnCheckList";
import WordsList from "../WordsList";
import {WordCellDropType} from "../WordCell/WordCell";
import WordDropWrap from "../WordDropWrap";

interface ISentenceConstructor {
    itemsInPallet: Array<WordType>;
    itemsOnCheck: Array<WordType>;
    onPalletChange: (newPallet: Array<WordType>) => void;
    onCheckChange: (newOnChange: Array<WordType>) => void;
    rows: number
}

const SentenceConstructor: React.FC<ISentenceConstructor> = (props) => {
    const onCheckSentenceDrop = (item: WordCellDropType) => {
        let newOnCheck: Array<WordType> = [...props.itemsOnCheck];
        let newPallet: Array<WordType> = [...props.itemsInPallet];
        const droppedItem = newPallet.find(i => i.id === item.id);
        if(!droppedItem){
            return;
        }

        newPallet.splice(newPallet.indexOf(droppedItem), 1);
        newOnCheck.push(droppedItem);
        props.onCheckChange(newOnCheck);
        props.onPalletChange(newPallet);
    }

    const onPalletDrop = (item: WordCellDropType, order: number) => {
        let newOnCheck: Array<WordType> = [...props.itemsOnCheck];
        let newPallet: Array<WordType> = [...props.itemsInPallet];
        let droppedItem = newOnCheck.find(i => i.id === item.id);
        if(!droppedItem){
            return;
        }

        droppedItem.order = order;
        newOnCheck.splice(newOnCheck.indexOf(droppedItem), 1);
        newPallet.push(droppedItem);
        props.onCheckChange(newOnCheck);
        props.onPalletChange(newPallet);
    }

    return(
        <DndProvider backend={HTML5Backend}>
            <OnCheckContainer>
                <WordDropWrap type="pallet-word" onDrop={onCheckSentenceDrop}>
                    <OnCheckList
                        rows={props.rows}
                        items={props.itemsOnCheck}
                    />
                </WordDropWrap>
            </OnCheckContainer>

            <WordsListContainer>
                <WordsList
                    rows={props.rows}
                    onDrop={onPalletDrop}
                    items={props.itemsInPallet}
                />
            </WordsListContainer>
        </DndProvider>
    )
}

const OnCheckContainer = styled.div`
  margin-bottom: 50px;
`

const WordsListContainer = styled.div`
`

export default SentenceConstructor;
