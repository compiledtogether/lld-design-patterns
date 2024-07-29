import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class PaymentGatewayManager {
    private PaymentGatewayManager() {
        System.out.println("Payment Gateway Manager initialized!");
    }

    private static PaymentGatewayManager instance;

    private static Lock mtx = new ReentrantLock();

    public static PaymentGatewayManager getInstance() {
        if(instance == null) { // First check without locking
            mtx.lock(); // Acquire the lock before creating the instance
            try {
                if(instance == null) { // Double-checked locking
                    instance = new PaymentGatewayManager();
                }
            } finally {
                mtx.unlock(); // Always release the lock
            }
        }

        return instance;
    }

    public void processPayment(double amount) {
        System.out.println("Processing payment of $" + amount + " through the payment gateway.");
    }
}

class PaymentGateway {
    public static void main(String[] args) {
        PaymentGatewayManager paymentGatewayManager = PaymentGatewayManager.getInstance();

        paymentGatewayManager.processPayment(100.0);

        PaymentGatewayManager anotherPaymentGatewayManager = PaymentGatewayManager.getInstance();

        if(paymentGatewayManager == anotherPaymentGatewayManager){
            System.out.println("Singleton is working fine! Both the instances are same.");
        }
        else{
            System.out.println("Singleton is not working fine! Both the instances are different.");
        }
    }
}