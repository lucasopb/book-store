const product = require("./product");

module.exports = class poster extends product {
    constructor(name, description, height, width, price, inStock) {
        super(name, description, price, inStock)
        this.height = height
        this.width = width
    }
}