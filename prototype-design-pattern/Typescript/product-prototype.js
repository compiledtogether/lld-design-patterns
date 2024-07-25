var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProductPrototype = /** @class */ (function () {
    function ProductPrototype() {
    }
    ProductPrototype.prototype.clone = function () { };
    ProductPrototype.prototype.display = function () { };
    return ProductPrototype;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(name, price) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    Product.prototype.clone = function () {
        return new Product(this.name, this.price);
    };
    Product.prototype.display = function () {
        console.log("Product: ".concat(this.name));
        console.log("Price: $".concat(this.price));
    };
    return Product;
}(ProductPrototype));
function main() {
    var product1 = new Product("Laptop", 999.99);
    var product2 = new Product("Smartphone", 499.99);
    var newProduct1 = product1.clone();
    var newProduct2 = product2.clone();
    console.log("Original Products:");
    product1.display();
    product2.display();
    console.log("\nCloned Products:");
    newProduct1.display();
    newProduct2.display();
}
main();
