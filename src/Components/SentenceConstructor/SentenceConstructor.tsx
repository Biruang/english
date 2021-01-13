import React, {useState} from "react";
import SentenceOnCheck from "../SentenceOnCheck";
import WordBadgesPallet from "../WordBadgesPallet";
import {SentenceType, WordType} from "../../Assets/data";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './SentenceConstructor.css';


interface ISentenceConstructor {
    items: SentenceType
}

const SentenceConstructor: React.FC<ISentenceConstructor> = ({ items }) => {
    const [itemsInPallet, setItemsInPallet] = useState(items.sentenceByWords);
    const [itemsOnCheck, setItemsOnCheck] = useState([]);

    return(
        <DndProvider backend={HTML5Backend}>
            <div className="sentence-constructor-container">
                <div className="sentence-constructor-on-check">
                    <SentenceOnCheck items={itemsOnCheck} />
                </div>

                <div className="sentence-constructor-pallet">
                    <WordBadgesPallet items={itemsInPallet} />
                </div>
            </div>
        </DndProvider>
    )
}

export default SentenceConstructor;
