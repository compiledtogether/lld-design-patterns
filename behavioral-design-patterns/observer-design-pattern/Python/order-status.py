from typing import List

# Abstract Observer
class Observer:
    def __init__(self) -> None:
        pass
    
    def update(self, order):
        pass
    
# Concrete Observers
class Customer(Observer):
    def __init__(self, name) -> None:
        super().__init__()
        self.name = name
        
    def update(self, order):
        print(f"Hello, {self.name}! Order # {order.get_id()} is now {order.get_status()}.")

class DeliveryPartner(Observer):
    def __init__(self, driver_name) -> None:
        super().__init__()
        self.driver_name = driver_name
        
    def update(self, order):
        print(f"Driver {self.driver_name}: Order # {order.get_id()} is now {order.get_status()}.")

class Restaurant(Observer):
    def __init__(self, restaurant_name) -> None:
        super().__init__()
        self.restaurant_name = restaurant_name
        
    def update(self, order):
        print(f"Restaurant {self.restaurant_name}: Order # {order.get_id()} is now {order.get_status()}.")

class CallCenter(Observer):
    def __init__(self) -> None:
        super().__init__()
        
    def update(self, order):
        print(f"Call center: Order # {order.get_id()} is now {order.get_status()}.")
        
# Subject
class Order:    
    def __init__(self, id) -> None:
        self.__id = id
        self.__status = "Order Placed"
        self.__observers: List[Observer] = []
        
    def get_id(self):
        return self.__id
    
    def get_status(self):
        return self.__status
    
    def set_status(self, status_message: str):
        self.__status = status_message
        self.notify_observers()
        
    def attach(self, observer: Observer):
        self.__observers.append((observer))
        
    def detach(self, observer: Observer):
        self.__observers.remove(observer)
        
    def notify_observers(self):
        for observer in self.__observers:
            observer.update(self)
            
# Client
def main():
    # Create an order
    order1: Order = Order(id=123)
    
    # Create customers, restaurants, drivers, and a call center to track the order
    customer: Customer = Customer(name="CustomerA")
    restaurant: Restaurant = Restaurant(restaurant_name="RestaurantA")
    driver: DeliveryPartner = DeliveryPartner(driver_name="DriverC")
    call_center: CallCenter = CallCenter()
    
    # Attach observers to the order
    order1.attach(customer)
    order1.attach(restaurant)
    order1.attach(driver)
    order1.attach(call_center)
    
    # Simulate order status updates
    order1.set_status(status_message="out for delivery")
    
    print()
    
    # Detach an observer (if needed)
    order1.detach(call_center)
    
    # Simulate more order status updates
    order1.set_status(status_message="delivered")
    
# calling main method
if __name__ == "__main__":
    main()