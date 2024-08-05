class OrderHandler:
    def __init__(self, next_handler) -> None:
        self.next_handler: OrderHandler = next_handler
    
    def process_order(self, order: str):
        pass

class OrderValidationHandler(OrderHandler):
    def __init__(self, next_handler) -> None:
        super().__init__(next_handler)
        
    def process_order(self, order: str):
        print(f"Validating order: {order}")
        
        if self.next_handler is not None:
            self.next_handler.process_order(order=order)

class PaymentProcessingHandler(OrderHandler):
    def __init__(self, next_handler) -> None:
        super().__init__(next_handler)
        
    def process_order(self, order: str):
        print(f"Processing payment for order: {order}")
        
        if self.next_handler is not None:
            self.next_handler.process_order(order=order)

class OrderPreparationHandler(OrderHandler):
    def __init__(self, next_handler) -> None:
        super().__init__(next_handler)
        
    def process_order(self, order: str):
        print(f"Preparing order: {order}")
        
        if self.next_handler is not None:
            self.next_handler.process_order(order=order)

class DeliveryAssignmentHandler(OrderHandler):
    def __init__(self, next_handler) -> None:
        super().__init__(next_handler)
        
    def process_order(self, order: str):
        print(f"Assigning delivery for order: {order}")
        
        if self.next_handler is not None:
            self.next_handler.process_order(order=order)

class OrderTrackingHandler(OrderHandler):
    def __init__(self, next_handler) -> None:
        super().__init__(next_handler)
        
    def process_order(self, order: str):
        print(f"Tracking order: {order}")
        
        if self.next_handler is not None:
            self.next_handler.process_order(order=order)
            
class SwiggyOrder:
    @staticmethod
    def main():
        order_processing_chain: OrderHandler = OrderValidationHandler(
            PaymentProcessingHandler(
                OrderPreparationHandler(
                    DeliveryAssignmentHandler(
                        OrderTrackingHandler(None)                   
                    )
                )
            )
        )
        
        order: str = "Pizza"
        order_processing_chain.process_order(order=order)
        
SwiggyOrder.main()