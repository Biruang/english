export type WordType = {
    id: number,
    text: string,
    translation: string,
    initialOrder: number,
    order: number
}

export type SentenceType = {
    rightOrder: Array<number>,
    sentenceByWords: Array<WordType>,
    text: string
}

export const data: SentenceType = {
    rightOrder: [1, 2, 3, 4, 5, 6, 7],
    sentenceByWords: [
        {
            id: 1,
            text: "ssss",
            translation: "ddddd",
            initialOrder: 1,
            order: 1
        },
        {
            id: 2,
            text: "aaaa",
            translation: "ddddd",
            initialOrder: 2,
            order: 2
        },
        {
            id: 3,
            text: "aaaa",
            translation: "ddddd",
            initialOrder: 3,
            order: 3
        },
        {
            id: 4,
            text: "aaaa",
            translation: "ddddd",
            initialOrder: 4,
            order: 4
        },
        {
            id: 5,
            text: "aaaa",
            translation: "ddddd",
            initialOrder: 5,
            order: 5
        },
        {
            id: 6,
            text: "aaaa",
            translation: "ddddd",
            initialOrder: 6,
            order: 6
        },
        {
            id: 7,
            text: "aaaa",
            translation: "ddddd",
            initialOrder: 7,
            order: 7
        }
    ],
    text: ""
}

export default data;
