from threading import Lock

class PaymentGatewayManager:
    # (static) class variables 
    mtx = Lock()
    instance = None
    
    def __init__(self) -> None:
        print("Payment Gateway Manager initialized!")
        
    @staticmethod
    def get_instance():
        if PaymentGatewayManager.instance is None:
            PaymentGatewayManager.mtx.acquire()
            if PaymentGatewayManager.instance is None:
                PaymentGatewayManager.instance = PaymentGatewayManager()
            PaymentGatewayManager.mtx.release()
            
        return PaymentGatewayManager.instance
                    
            
        
    def processPayment(self, amount: float):
        print(f"Processing payment of ${amount} through the payment gateway.")
        
        
class PaymentGateway:
    @staticmethod
    def main():
        paymentGatewayManager: PaymentGatewayManager = PaymentGatewayManager.get_instance()
        
        paymentGatewayManager.processPayment(100)
        
        anotherPaymentGatewayManager: PaymentGatewayManager = PaymentGatewayManager.get_instance()
        
        if paymentGatewayManager is anotherPaymentGatewayManager:
            print("Singleton is working fine! Both the instances are same.")
        else:
            print("Singleton is not working fine! Both the instances are different.")
        
        
     
PaymentGateway.main()