export type WordType = {
    id: number,
    text: string,
    translation: string
}

export type SentenceType = {
    rightOrder: Array<number>,
    sentenceByWords: Array<WordType>,
    text: string
}

export const data: SentenceType = {
    rightOrder: [1, 2, 3, 4, 5],
    sentenceByWords: [
        {
            id: 1,
            text: "ssss",
            translation: "ddddd"
        },
        {
            id: 2,
            text: "aaaa",
            translation: "ddddd"
        },
        {
            id: 3,
            text: "aaaa",
            translation: "ddddd"
        },
        {
            id: 4,
            text: "aaaa",
            translation: "ddddd"
        },
        {
            id: 5,
            text: "aaaa",
            translation: "ddddd"
        },
        {
            id: 6,
            text: "aaaa",
            translation: "ddddd"
        },
        {
            id: 7,
            text: "aaaa",
            translation: "ddddd"
        }
    ],
    text: ""
}

export default data;
