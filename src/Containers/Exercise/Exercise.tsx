import React, {useEffect, useState} from "react";
import ExerciseDisplay from "../../Components/ExerciseDisplay/ExerciseDisplay";
import Button from "../../Components/Button";
import {SentenceType, WordType} from "../../Assets/data";

import './Exercise.css';
import {OnCheckDropItem} from "../../Components/SentenceOnCheck/SentenceOnCheck";
import {PalletDropItem} from "../../Components/WordBadgesPallet/WordBadgesPallet";
import {HTML5Backend} from "react-dnd-html5-backend";
import SentenceOnCheck from "../../Components/SentenceOnCheck";
import WordBadgesPallet from "../../Components/WordBadgesPallet";
import {DndProvider} from "react-dnd";
import Results from "../../Components/Results";

interface IExercise {
    data: SentenceType
}

const Exercise: React.FC<IExercise> = (props) => {
    const [itemsInPallet, setItemsInPallet] = useState(props.data.sentenceByWords);
    const [itemsOnCheck, setItemsOnCheck] = useState<Array<WordType>>([]);
    const [rowNumber, ] = useState(Math.ceil(props.data.sentenceByWords.length / 6));
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isResultShown, setIsResultShown] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        if(itemsOnCheck.length === props.data.sentenceByWords.length){
            setIsButtonDisabled(false);
        }
    }, [itemsOnCheck, props.data]);

    const sortPalletItems = (pallet: Array<WordType>): Array<WordType> => {
        const newPallet = [];
        const words = props.data.sentenceByWords

        let order = 1;
        for(let i = 1; i <= words.length; i++){
            const word = pallet.find(item => item.initialOrder === i);

            if(!word){
                continue;
            }
            word.order = order;
            order++;
            newPallet.push(word);
        }
        return newPallet;
    }

    const onCheckSentenceDrop = (item: OnCheckDropItem) => {
        let newOnCheck: Array<WordType> = [...itemsOnCheck];
        let newPallet: Array<WordType> = [...itemsInPallet];

        newPallet.splice(newPallet.indexOf(item.object), 1);
        newOnCheck.push(item.object);
        newPallet = sortPalletItems(newPallet);
        setItemsOnCheck(newOnCheck);
        setItemsInPallet(newPallet);
    }

    const onPalletDrop = (item: PalletDropItem, order: number) => {
        let newOnCheck: Array<WordType> = [...itemsOnCheck];
        let newPallet: Array<WordType> = [...itemsInPallet];
        let newObject = item.object;
        newObject.order = order;

        newOnCheck.splice(newOnCheck.indexOf(item.object), 1);
        newPallet.push(newObject);
        setItemsInPallet(newPallet);
        setItemsOnCheck(newOnCheck);
        setTimeout(() => {
            setItemsInPallet(sortPalletItems(newPallet));
        }, 50)
    }

    const onCheckClick = (ev: React.MouseEvent<HTMLButtonElement>): void => {
        const correctWords: Array<WordType> = props.data.sentenceByWords;
        let isCorrect = true;
        for(let i = 0; i < correctWords.length; i++){
            if(correctWords[i].text !== itemsOnCheck[i].text){
                isCorrect = false
                break;
            }
        }
        setIsCorrect(isCorrect);
        setIsResultShown(true);
    }

    return (
        <div className="exercise-container">
            <h1 className="exercise-header">
                Переведите предложение
            </h1>

            <div className="exercise-display-wrap">
                <ExerciseDisplay words={props.data.sentenceByWords} />
            </div>

            <div className="sentence-constructor-container">
                <DndProvider backend={HTML5Backend}>
                    <div className="sentence-constructor-on-check">
                        <SentenceOnCheck
                            rows={rowNumber}
                            onDrop={onCheckSentenceDrop}
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
                </DndProvider>
            </div>

            <div className="exercise-result-wrap">
                <Results shown={isResultShown} correct={isCorrect} />
            </div>

            <div className="exercise-button-wrap">
                <Button
                    onClick={onCheckClick}
                    disabled={isButtonDisabled}
                >
                    Проверить
                </Button>
            </div>
        </div>
    );
}

export default Exercise;
