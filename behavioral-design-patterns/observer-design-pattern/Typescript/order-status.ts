// Abstract Observer
class Observer {
    update(order: Order) {}
}

// Concrete Observers
class Customer extends Observer {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    update(order: Order){
        console.log(`Hello ${this.name}! Order #${order.getId()} is now ${order.getStatus()}.`);
    }
}

class DeliveryPartner extends Observer {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    update(order: Order){
        console.log(`Driver ${this.name}: Order #${order.getId()} is now ${order.getStatus()}.`);
    }
}
class Restaurant extends Observer {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    update(order: Order){
        console.log(`Restaurant ${this.name}: Order #${order.getId()} is now ${order.getStatus()}.`);
    }
}
class CallCenter extends Observer {
    constructor() {
        super();
    }

    update(order: Order){
        console.log(`Call Center: Order #${order.getId()} is now ${order.getStatus()}.`);
    }
}

// Subject
class Order {

    private id: number;
    private status: string;
    private observers: Observer[] = [];

    constructor(id: number) {
        this.id = id;
        this.status = "Order Placed";
    }

    public getId(){
        return this.id;
    }

    public getStatus(){
        return this.status;
    }

    public setStatus(status: string){
        this.status = status;
        this.notifyObservers();
    }

    public attach(observer: Observer){
        this.observers.push(observer);
    }

    public detach(observer: Observer){
        this.observers = this.observers.filter(item => item !== observer);
    }

    private notifyObservers(){
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

// Client
function notificationManager() {
    // Create an order
    const order1: Order = new Order(123);

    // Create customers, restaurants, drivers, and a call center to track the order
    const customer: Customer = new Customer("CustomerA");
    const driver: DeliveryPartner = new DeliveryPartner("DriverA");
    const restaurant: Restaurant = new Restaurant("RestaurantA");
    const callCenter: CallCenter = new CallCenter();

    // Attach observers to the order
    order1.attach(customer);
    order1.attach(driver);
    order1.attach(restaurant);
    order1.attach(callCenter);

    // Simulate order status updates
    order1.setStatus("out for delivery");

    console.log("");
    
    // Detach an observer (if needed)
    order1.detach(callCenter);

    // Simulate more order status updates
    order1.setStatus("delivered");
}

notificationManager()