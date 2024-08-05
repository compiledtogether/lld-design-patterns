from enum import Enum

class LogLevel(Enum):
    INFO = "INFO"
    DEBUG = "DEBUG"
    ERROR = "ERROR"

class ILogger:
    def log(self, msg):
        pass

class DebugLogger(ILogger):
    def log(self, msg):
        print(f"{LogLevel.DEBUG.value}: {msg}")
        
class InfoLogger(ILogger):
    def log(self, msg):
        print(f"{LogLevel.INFO.value}: {msg}")
        
class ErrorLogger(ILogger):
    def log(self, msg):
        print(f"{LogLevel.ERROR.value}: {msg}")    
        
class LoggerFactory:
    @staticmethod
    def create_logger(logLevel):
        if logLevel == LogLevel.DEBUG:
            return DebugLogger() 
        elif logLevel == LogLevel.INFO:
            return InfoLogger() 
        elif logLevel == LogLevel.ERROR:
            return ErrorLogger() 
        else:
            return None
    
def main():
    logger = LoggerFactory.create_logger(LogLevel.ERROR)
    
    logger.log("This is a log message")
    
if __name__ == "__main__":
    main()