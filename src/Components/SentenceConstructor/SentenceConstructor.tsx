import React, {useState} from "react";
import SentenceOnCheck from "../SentenceOnCheck";
import WordBadgesPallet from "../WordBadgesPallet";
import {SentenceType, WordType} from "../../Assets/data";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './SentenceConstructor.css';
import {OnCheckDropItem} from "../SentenceOnCheck/SentenceOnCheck";
import {PalletDropItem} from "../WordBadgesPallet/WordBadgesPallet";

interface ISentenceConstructor {
    items: SentenceType
}

const SentenceConstructor: React.FC<ISentenceConstructor> = ({ items }) => {
    const [itemsInPallet, setItemsInPallet] = useState(items.sentenceByWords);
    const [itemsOnCheck, setItemsOnCheck] = useState<Array<WordType>>([]);
    const [rowNumber, setRowNumber] = useState(Math.ceil(items.sentenceByWords.length / 6))

    const onCheckDrop = (item: OnCheckDropItem) => {
        const newOnCheck: Array<WordType> = itemsOnCheck;
        const newPallet: Array<WordType> = itemsInPallet;

        newPallet.splice(newPallet.indexOf(item.object), 1);
        newOnCheck.push(item.object);
        setItemsOnCheck(newOnCheck);
        setItemsInPallet(newPallet);
    }

    const onPalletDrop = (item: PalletDropItem) => {
        const newOnCheck: Array<WordType> = itemsOnCheck;
        const newPallet: Array<WordType> = itemsInPallet;

        newOnCheck.splice(newOnCheck.indexOf(item.object), 1);
        newPallet.push(item.object);
        setItemsInPallet(newPallet);
        setItemsOnCheck(newOnCheck);
    }

    return(
        <DndProvider backend={HTML5Backend}>
            <div className="sentence-constructor-container">
                <div className="sentence-constructor-on-check">
                    <SentenceOnCheck
                        rows={rowNumber}
                        onDrop={onCheckDrop}
                        items={itemsOnCheck}
                    />
                </div>

                <div className="sentence-constructor-pallet">
                    <WordBadgesPallet
                        rows={rowNumber}
                        onDrop={onPalletDrop}
                        items={itemsInPallet}
                    />
                </div>
            </div>
        </DndProvider>
    )
}

export default SentenceConstructor;
