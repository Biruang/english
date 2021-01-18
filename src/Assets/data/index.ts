export type WordType = {
    id: number,
    text: string,
    translation: string,
    initialOrder: number,
    order: number
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
    }
]

export default data;
