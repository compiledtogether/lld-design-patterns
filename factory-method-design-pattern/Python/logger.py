from enum import Enum

# Enum for Log Level
class LogLevel(Enum):
    INFO = "INFO"
    DEBUG = "DEBUG"
    ERROR = "ERROR"

# Abstraction Layer: Interface for Products
class ILogger:
    def log(self, msg):
        pass

# Low Level Module: Classes for Products
class DebugLogger(ILogger):
    def log(self, msg):
        print(f"{LogLevel.DEBUG.value}: {msg}")
        
class InfoLogger(ILogger):
    def log(self, msg):
        print(f"{LogLevel.INFO.value}: {msg}")
        
class ErrorLogger(ILogger):
    def log(self, msg):
        print(f"{LogLevel.ERROR.value}: {msg}")    
        
# Interface for Concrete Factory
class ILoggerFactory:
    def create_logger(self):
        pass
   
# Class for Concrete Products for Instantiating Objects 
class DebugLoggerFactory(ILoggerFactory):
    def create_logger(self):
        return DebugLogger()

class InfoLoggerFactory(ILoggerFactory):
    def create_logger(self):
        return InfoLogger()

class ErrorLoggerFactory(ILoggerFactory):
    def create_logger(self):
        return ErrorLogger()
    
# High Level Module(Client): Main Method
def main():
    debugLoggerFactory = DebugLoggerFactory()
    debugLogger = debugLoggerFactory.create_logger()
    
    debugLogger.log("This is a log message")
    
if __name__ == "__main__":
    main()