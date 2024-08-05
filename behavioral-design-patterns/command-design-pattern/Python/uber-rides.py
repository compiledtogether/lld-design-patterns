class RideService:
    def __init__(self) -> None:
        pass
    
    def request_ride(self, passenger: str, src_loc: str, dest_loc: str):
        print(f"Requesting a ride for passenger: {passenger} from {src_loc} to {dest_loc}") 
        # Additional ride request processing logic here
        
    def cancel_ride(self, passenger: str):
        print(f"Cancelling the ride for passenger: {passenger}")
        # Additional Cancellation ride request processing logic here
        
        
class Command:
    def execute(self):
        pass
    
class RideRequestCommand(Command):
    def __init__(self, receiver: RideService, passenger: str, src_loc: str, dest_loc: str) -> None:
        super().__init__()
        self.__receiver = receiver
        self.__passenger = passenger
        self.__src_loc = src_loc
        self.__dest_loc = dest_loc
        
    def execute(self):
        self.__receiver.request_ride(self.__passenger, self.__src_loc, self.__dest_loc)
        
        
class CancelRideRequestCommand(Command):
    def __init__(self, receiver: RideService, passenger: str) -> None:
        super().__init__()
        self.__receiver = receiver
        self.__passenger = passenger
        
    def execute(self):
        self.__receiver.cancel_ride(self.__passenger)
        
class RideRequestInvoker:
    def __init__(self) -> None:
        pass
    
    def process_request(self, command: Command):
        command.execute()

def main():
    # Create a receiver
    ride_service = RideService()
    
    # Create an invoker
    ride_request_invoker = RideRequestInvoker() 
    
    ride_request1: Command = RideRequestCommand(
        receiver=ride_service,   
        passenger="Sumit", 
        src_loc="Mahadevpura", 
        dest_loc="Sarjapur"
    )
    ride_request2: Command = RideRequestCommand(
        receiver=ride_service,
        passenger="Surbhi", 
        src_loc="Sarjapur", 
        dest_loc="Indiranagar"
    )
    cancel_request: Command = CancelRideRequestCommand(
        receiver=ride_service,
        passenger="Sumit"
    )
    
    ride_request_invoker.process_request(ride_request1)
    ride_request_invoker.process_request(ride_request2)
    ride_request_invoker.process_request(cancel_request)
    
       
    
if __name__ == "__main__":
    main()