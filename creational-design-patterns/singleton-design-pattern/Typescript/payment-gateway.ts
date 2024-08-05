class MutexLock {
    private isLocked = false;
  
    acquire() {
      while (this.isLocked) {
        // Busy wait (not ideal for long-running locks)
      }
      this.isLocked = true;
    }
  
    release() {
      this.isLocked = false;
    }
} 

class PaymentGatewayManager {
    
    constructor() {
        console.log("Payment Gateway Manager initialized!")
    }
    
    private static instance: PaymentGatewayManager;
    // The lock object to ensure thread safety
    private static lock = new Object();
    
    public static getInstance() {
        if (!PaymentGatewayManager.instance) {
            // Locking to ensure that only one instance is created
            synchronized(PaymentGatewayManager.lock, () => {
                // Double-check to ensure that instance is not created by another thread
                if (!PaymentGatewayManager.instance) {
                    PaymentGatewayManager.instance = new PaymentGatewayManager();
                }
            });
        }
        return PaymentGatewayManager.instance;
    }

    public processPayment(amount: number){
        console.log(`Processing payment of $${amount} through the payment gateway.`)
    }
}

// Helper function to simulate synchronized blocks
function synchronized(lock: Object, callback: () => void) {
    // Simulate synchronization using a mutex-like pattern
    // In a real TypeScript/JavaScript environment, this would require async/await or a library
    callback();
}

class PaymentGateway {
    static main() {
        const paymentGatewayManagerInstance: PaymentGatewayManager = PaymentGatewayManager.getInstance();
        
        paymentGatewayManagerInstance.processPayment(100.0);
        
        const anotherPaymentGatewayManagerInstance: PaymentGatewayManager = PaymentGatewayManager.getInstance();

        if(paymentGatewayManagerInstance === anotherPaymentGatewayManagerInstance) {
            console.log("Singleton is working fine! Both the instances are same.");
        }
        else {
            console.log("Singleton is not working fine! Both the instances are different.");
        }
    }
}

PaymentGateway.main();