import React, {useState} from "react";

import './SentenceConstructor.css';
import SentenceOnCheck from "../SentenceOnCheck";
import WordBadgesPallet from "../WordBadgesPallet";
import {WordType} from "../../data/fakeStorage";

interface ISentenceConstructor {
    items: Array<WordType>
}

const SentenceConstructor: React.FC<ISentenceConstructor> = ({ items }) => {
    const [itemsInPallet, setItemsInPallet] = useState(items);
    const [itemsOnCheck, setItemsOnCheck] = useState([]);

    return(
        <div className="sentence-constructor-container">
            <div className="sentence-constructor-on-check">
                <SentenceOnCheck items={itemsOnCheck} />
            </div>

            <div className="sentence-constructor-pallet">
                <WordBadgesPallet items={itemsInPallet} />
            </div>
        </div>
    )
}

export default SentenceConstructor;
