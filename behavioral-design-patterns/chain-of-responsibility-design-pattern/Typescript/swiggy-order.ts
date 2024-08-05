class OrderHandler {
    public nextHandler: OrderHandler | null;
    constructor (nextHandler: OrderHandler | null) {
        this.nextHandler = nextHandler;
    }
    public processOrder(order: string) {}
}

class OrderValidationHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    public processOrder(order: string) {
        console.log(`Validating order: ${order}`);

        if (this.nextHandler != null) {
            this.nextHandler.processOrder(order=order)
        }
    }
}
class PaymentProcessingHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    public processOrder(order: string) {
        console.log(`Processing payment for order: ${order}`);

        if (this.nextHandler != null) {
            this.nextHandler.processOrder(order=order)
        }
    }
}
class OrderPreparationHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    public processOrder(order: string) {
        console.log(`Preparing order: ${order}`);

        if (this.nextHandler != null) {
            this.nextHandler.processOrder(order=order)
        }
    }
}
class DeliveryAssignmentHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    public processOrder(order: string) {
        console.log(`Assigning delivery for order: ${order}`);

        if (this.nextHandler != null) {
            this.nextHandler.processOrder(order=order)
        }
    }
}
class OrderTrackingHandler extends OrderHandler {
    constructor(nextHandler: OrderHandler | null) {
        super(nextHandler);
    }

    public processOrder(order: string) {
        console.log(`Tracking order: ${order}`);

        if (this.nextHandler != null) {
            this.nextHandler.processOrder(order=order)
        }
    }
}

class SwiggyOrder {
    public static main() {
        const orderProcessingChain: OrderHandler | null = new OrderValidationHandler(
            new PaymentProcessingHandler(
                new OrderPreparationHandler(
                    new DeliveryAssignmentHandler(
                        new OrderTrackingHandler(null)
                    )
                )
            )
        )

        const order: string = "Pizza";
        orderProcessingChain.processOrder(order);
    }
}

SwiggyOrder.main()