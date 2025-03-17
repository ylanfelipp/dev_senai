const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];


function getBooks() {
    return data;
}


function getBook(id) {
    return data.find((d) => d.id === id);
}


const book = getBook(1)
console.log(book)

// const title = book.title
// const author = book.author
// title
// author

const { title, author, pages, genres, publicationDate } = book

console.log(title, author, pages)

console.log(genres)

// const primeiroGenero = genres[0]
// const segundoGenero = genres[1]
// console.log(primeiroGenero, segundoGenero)

const [primeiroGenero, segundoGenero, x] = genres

console.log(primeiroGenero, segundoGenero, x)

const anotherBook = getBook(3)
console.log(anotherBook)

const { title: anotherTitle, author: anotherAuthor } = anotherBook
console.log(anotherTitle, anotherAuthor)

const otherBook = getBook(5)

const { genres: otherGenres } = otherBook
const otherFirstGenres = otherGenres[0]

console.log(otherFirstGenres)

const bookFour = getBook(4)
console.log(bookFour)

const { reviews } = bookFour

// const { goodreads, librarything } = reviews

// console.log(goodreads, librarything)

const bookTwo = getBook(2)

const bookCopy = { ...bookTwo }

console.log(bookTwo, bookCopy)

function updateBookPages(id, newPages) {
    const book = getBook(id)
    const bookUpdate = { ...book, pages: newPages }
    return bookUpdate
}

function updateBookPagesReviews(id, newPages, reviewsUpdate) {
    const book = getBook(id)
    const bookUpdate = { ...book, pages: newPages, reviews: { ...reviewsUpdate } }
    return bookUpdate
}

const bookUpdate = updateBookPages(4, 218)

const bookUpdate2 = updateBookPagesReviews(3, 660, { goodreads: { rating: 4.25, ratingsCount: 1142893, reviewsCount: 49701 }, librarything: { rating: 4.87, ratingsCount: 1153904, reviewsCount: 50877 }})

// console.log(bookUpdate)
console.log(bookUpdate2)

console.log(`Título: ${title}, Data de Publicação: ${publicationDate}`)

function getBookInfo(id) {
    const book = getBook(id)
    return `O livro ${book.title} foi escrito por ${book.author} e publicado em ${book.publicationDate}.`
}

console.log(getBookInfo(3))

function getAllBooks() {
    getBooks().forEach(book => {
        console.log(`Título: ${book.title}, Autor: ${book.author}, N° de Páginas: ${book.pages}`)
    })
}

getAllBooks()

const hasMovie = getBook(5).hasMovieAdaptation ? true : false

function checkMovie(id) {
    const hasMovie = getBook(id).hasMovieAdaptation
    return hasMovie ? "Este livro tem filme" : "Este livro não tem filme"
}

console.log(checkMovie(1))
console.log(checkMovie(2))
console.log(checkMovie(3))
console.log(checkMovie(4))
console.log(checkMovie(5))

function listMovie() {
    data.forEach(book => {
        console.log(`${book.title} ${book.hasMovieAdaptation ? "🎞️" : "📖" }`)
    })
}

listMovie()

const getTitle = (id) => getBook(id).title

console.log(getTitle(3))

const hasManyPages = (id) => getBook(id).pages > 500
console.log(`${getTitle(3)}, ${hasManyPages(3)}`)

const filterByAuthor = (author) => {
    return getBooks().filter(bookAuthor => bookAuthor.author === author)
}

console.log(filterByAuthor(getBook(3).author))

console.log(getBook(31) ?? "Título Desconhecido")

function hasTranslation(id, lang) {
    const book = getBook(id)
    return book.translations[lang] ?? "Idioma não suportado!"
}

console.log(hasTranslation(2, "portuguese"))
console.log(hasTranslation(1, "spanish"))
console.log(hasTranslation(1, "portuguese"))
console.log(hasTranslation(4, "portuguese"))

const getReviewsCount = (id) => {
    const book = getBook(id)
    if (book.id === 3) return "Sem avaliações"
    return book.reviews.librarything.reviewsCount ?? "Sem avaliações"
}

console.log(getReviewsCount(1))
console.log(getReviewsCount(3))

console.log(getBook(4).translations?.portuguese)

const checkTranslation = (id, lang) => {
    const book = getBook(id)
    const langs = Object.keys(book.translations)
    const hasTranslation = langs.includes(lang)
    return hasTranslation ? "Tem Tradução" : "Não tem Tradução"
}

console.log(checkTranslation(5, "portuguese"))
console.log(checkTranslation(4, "portuguese"))
console.log(checkTranslation(3, "portuguese"))

const getTotalRatings = id => {
    const { reviews } = getBook(id)
    if (!reviews.goodreads || !reviews.librarything) return "Sem avaliações"
    return reviews.goodreads.reviewsCount + reviews.librarything.reviewsCount
}

console.log(getTotalRatings(2))
console.log(getTotalRatings(3))
console.log(getTotalRatings(5))

const listTitles = getBooks().map(book => book.title)
console.log(listTitles)

const titlesAndAuhtors = getBooks().map(book => `${book.title} - ${book.author}`)
console.log(titlesAndAuhtors)

const newArryBooks = getBooks().map(book => {
    const { title, pages } = book
    let averageRatings
    if (!book.reviews.goodreads) {
        averageRatings = book.reviews.librarything.rating
    } else if (!book.reviews.librarything) {
        averageRatings = book.reviews.goodreads.rating
    } else {
        averageRatings = (book.reviews.goodreads.rating + book.reviews.librarything.rating) / 2
        averageRatings = parseFloat(averageRatings.toFixed(2))
    }

    return { title, pages, averageRatings }
})

console.log(newArryBooks)

const arrayHasMovieAdaptation = getBooks().filter(book => book.hasMovieAdaptation)
console.log(arrayHasMovieAdaptation)

const fantasyMovies = getBooks().filter(book => book.genres.includes("fantasy"))
console.log(fantasyMovies)

const highCountRatings = getBooks().filter(book => book.reviews.goodreads.ratingsCount > 1000000)
console.log(highCountRatings)

const totalPages = getBooks().reduce((acc, curr) => acc + curr.pages,0)
console.log(totalPages)