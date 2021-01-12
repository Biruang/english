import React from "react";

import './SentenceConstructor.css';
import SentenceOnCheck from "../SentenceOnCheck";
import WordBadgesPallet from "../WordBadgesPallet";

const SentenceConstructor: React.FC = () => {
    return(
        <div className="sentence-constructor-container">
            <div className="sentence-constructor-on-check">
                <SentenceOnCheck />
            </div>

            <div className="sentence-constructor-pallet">
                <WordBadgesPallet />
            </div>
        </div>
    )
}

export default SentenceConstructor;
