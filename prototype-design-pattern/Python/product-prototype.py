class ProductPrototype: 
    def clone(self):
        pass
    
    def display(self):
        pass
    
class Product(ProductPrototype):
    def __init__(self, name: str, price: float) -> None:
        self.name = name
        self.price = price
        
    def clone(self) -> ProductPrototype:
        return Product(self.name, self.price)
    
    def display(self) -> None:
        print(f"Product: {self.name}")
        print(f"Price: ${self.price}")
        
def main():
    product1: ProductPrototype = Product("Laptop", 999.99)
    product2: ProductPrototype = Product("Smartphone", 499.99)
    
    newProduct1: ProductPrototype = product1.clone()
    newProduct2: ProductPrototype = product2.clone()
    
    print("Original Products:")
    product1.display()
    product2.display()

    print("\nCloned Products:")
    newProduct1.display()
    newProduct2.display()
    
if __name__ == "__main__":
    main()