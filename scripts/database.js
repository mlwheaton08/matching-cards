const cards = [
    {
        id: 1,
        imgId: 1
    },
    {
        id: 2,
        imgId: 1
    },
    {
        id: 3,
        imgId: 2
    },
    {
        id: 4,
        imgId: 2
    },
    {
        id: 5,
        imgId: 3
    },
    {
        id: 6,
        imgId: 3
    },
    {
        id: 7,
        imgId: 4
    },
    {
        id: 8,
        imgId: 4
    },
    {
        id: 9,
        imgId: 5
    },
    {
        id: 10,
        imgId: 5
    },
    {
        id: 11,
        imgId: 6
    },
    {
        id: 12,
        imgId: 6
    },
    {
        id: 13,
        imgId: 7
    },
    {
        id: 14,
        imgId: 7
    },
    {
        id: 15,
        imgId: 8
    },
    {
        id: 16,
        imgId: 8
    }
]

const images = [
    {
        id: 1,
        image: 'circle.jpg',
        alt: 'green circle'
    },
    {
        id: 2,
        image: 'diamond.jpg',
        alt: 'green diamond'
    },
    {
        id: 3,
        image: 'heart.jpg',
        alt: 'green heart'
    },
    {
        id: 4,
        image: 'lightning.jpg',
        alt: 'green lightning bolt'
    },
    {
        id: 5,
        image: 'square.jpg',
        alt: 'green square'
    },
    {
        id: 6,
        image: 'star.jpg',
        alt: 'green star'
    },
    {
        id: 7,
        image: 'triangle.jpg',
        alt: 'green triangle'
    },
    {
        id: 8,
        image: 'twinkle.jpg',
        alt: 'green twinkle star'
    }
]

export const getCards = () => {
    return cards.map(card => ({...card}))
}

export const getImages = () => {
    return images.map(image => ({...image}))
}