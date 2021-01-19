import React, {useEffect, useState} from "react";
import styled from "styled-components";

import ExerciseDisplay from "../../Components/ExerciseDisplay/ExerciseDisplay";
import Button from "../../Components/Button";
import data, {WordType} from "../../Assets/data";

import Results from "../../Components/Results";
import SentenceConstructor from "../../Components/SentenceConstructor";

interface IExercise {
    data: Array<WordType>
}

const Exercise: React.FC<IExercise> = (props) => {
    const [itemsInPallet, setItemsInPallet] = useState(props.data);
    const [itemsOnCheck, setItemsOnCheck] = useState<Array<WordType>>([]);
    const [rowNumber, ] = useState(Math.ceil(props.data.length / 6));
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isResultShown, setIsResultShown] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        if(itemsOnCheck.length === props.data.length){
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
            setIsResultShown(false);
        }
    }, [itemsOnCheck, props.data]);

    const sortPalletItems = (pallet: Array<WordType>): Array<WordType> => {
        const newPallet = [];
        const words = props.data

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

    const onCheckClick = (ev: React.MouseEvent<HTMLButtonElement>): void => {
        const correctWords: Array<WordType> = props.data;
        let isCorrect = true;
        for(let i = 0; i < correctWords.length; i++){
            if(correctWords[i].translation !== itemsOnCheck[i].translation){
                isCorrect = false
                break;
            }
        }
        if(isCorrect){
            let text: string = "";
            data.forEach(word => {
                text = text + " " + word.translation;
            });
            let msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
        }
        setIsCorrect(isCorrect);
        setIsResultShown(true);
    }

    const onPalletChange = (newPallet: Array<WordType>) => {
        setItemsInPallet(newPallet);

        setTimeout(() => {
            setItemsInPallet(sortPalletItems(newPallet));
        }, 50);
    }

    const onCheckChange = (newOnCheck: Array<WordType>) => {
        setItemsOnCheck(newOnCheck);
    }

    return (
        <ExerciseContainer>
            <ExerciseHeader>
                Переведите предложение
            </ExerciseHeader>

            <ExerciseDisplayContainer>
                <ExerciseDisplay words={props.data} />
            </ExerciseDisplayContainer>

            <SentenceConstructorContainer>
                <SentenceConstructor
                    itemsInPallet={itemsInPallet}
                    itemsOnCheck={itemsOnCheck}
                    onPalletChange={onPalletChange}
                    onCheckChange={onCheckChange}
                    rows={rowNumber}
                />
            </SentenceConstructorContainer>

            <ExerciseResultContainer>
                <Results shown={isResultShown} correct={isCorrect} />
            </ExerciseResultContainer>

            <ExerciseButtonContainer>
                <Button
                    onClick={onCheckClick}
                    disabled={isButtonDisabled}
                >
                    Проверить
                </Button>
            </ExerciseButtonContainer>
        </ExerciseContainer>
    );
}

const ExerciseContainer = styled.div`
  width: 470px;
`

const ExerciseHeader = styled.h1`
  font-size: 36px;
  font-weight: 400;
  text-shadow: -2px -4px 3px #FFFFFF, 2px 4px 3px rgba(0, 0, 0, 0.25);
  color: #252525;
  margin-bottom: 56px;
`

const ExerciseDisplayContainer = styled.div`
  margin-bottom: 50px;
`

const SentenceConstructorContainer = styled.div`
  margin-bottom: 57px;
`

const ExerciseResultContainer = styled.div`
  margin-bottom: 22px;
`

const ExerciseButtonContainer = styled.div`
`

export default Exercise;
