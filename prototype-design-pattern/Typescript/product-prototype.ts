//  Abstraction Layer: Interface for ProductPrototype
class ProductPrototype {
    clone(): any {}
    display(): void {}
}

class Product extends ProductPrototype{
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price;
    }

    clone(): ProductPrototype {
        return new Product(this.name, this.price);
    }

    display(): void {
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.price}`)
    }
}

// High Level Module(Client): Main Method
function client(){

    const product1: ProductPrototype = new Product("Laptop", 999.99);
    const product2: ProductPrototype = new Product("Smartphone", 499.99);

    const newProduct1: ProductPrototype = product1.clone();
    const newProduct2: ProductPrototype = product2.clone();

    console.log("Original Products:")
    product1.display();
    product2.display();

    console.log("\nCloned Products:")
    newProduct1.display();
    newProduct2.display();
}

client()
