class RideService {
    requestRide(passenger: string, srcLoc: string, destLoc: string){
        console.log(`Requesting a ride for passenger: ${passenger} from ${srcLoc} to ${destLoc}`);
    }

    cancelRide(passenger: string) {
        console.log(`Cancelling the ride for passenger: ${passenger}`);
    }
}

class Command {
    public execute() {}
}

class RideRequestCommand extends Command {
    private receiver: RideService;
    private passenger: string;
    private srcLoc: string;
    private destLoc: string;

    constructor(receiver: RideService, passenger: string, srcLoc: string, destLoc: string) {
        super();
        this.receiver = receiver;
        this.passenger = passenger;
        this.srcLoc = srcLoc;
        this.destLoc = destLoc;
    }

    public execute() {
        this.receiver.requestRide(this.passenger, this.srcLoc, this.destLoc);
    }
}

class CancelRideRequestCommand {
    private receiver: RideService;
    private passenger: string;

    constructor(receiver: RideService, passenger: string) {
        this.receiver = receiver;
        this.passenger = passenger;
    }

    public execute() {
        this.receiver.cancelRide(this.passenger);
    }
}

class RideRequestInvoker {
    public processRequest(command: Command){
        command.execute()
    }
}

function uberRides() {
    const rideService: RideService = new RideService();
    
    const rideRequestInvoker: RideRequestInvoker = new RideRequestInvoker();

    const rideRequest1: Command = new RideRequestCommand(
        rideService,   
        "Sumit", 
        "Mahadevpura", 
        "Sarjapur"
    )
    const rideRequest2: Command = new RideRequestCommand(
        rideService,
        "Surbhi", 
        "Sarjapur", 
        "Indiranagar"
    )
    const cancelRequest: Command = new CancelRideRequestCommand(
        rideService,
        "Sumit"
    )

    rideRequestInvoker.processRequest(rideRequest1);
    rideRequestInvoker.processRequest(rideRequest2);
    rideRequestInvoker.processRequest(cancelRequest);
}

uberRides()