export type WordType = {
    id: number,
    text: string,
    translation: string,
    initialOrder: number,
    order: number,
    prevOrder?: number
}

export type SentenceType = {
    sentenceByWords: Array<WordType>,
}

export const data: Array<WordType> = [
    {
        id: 1,
        text: "ssss",
        translation: "кот",
        initialOrder: 1,
        order: 1
    },
    {
        id: 2,
        text: "aaaa",
        translation: "ел",
        initialOrder: 2,
        order: 2
    },
    {
        id: 3,
        text: "aaaa",
        translation: "корм",
        initialOrder: 3,
        order: 3
    },
    {
        id: 4,
        text: "ssss",
        translation: "кот",
        initialOrder: 4,
        order: 4
    },
    {
        id: 5,
        text: "aaaa",
        translation: "ел",
        initialOrder: 5,
        order: 5
    },
    {
        id: 6,
        text: "aaaa",
        translation: "корм",
        initialOrder: 6,
        order: 6
    },
    {
        id: 7,
        text: "ssss",
        translation: "кот",
        initialOrder: 7,
        order: 7
    },
]

export default data;
