const product = require("./product");

module.exports = class book extends product{
    constructor(title, dynopsis, genre, pages, author, description, price, inStock) {
        super(`livro: ${title}`, description, price, inStock)
        this.title = title
        this.dynopsis = dynopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}