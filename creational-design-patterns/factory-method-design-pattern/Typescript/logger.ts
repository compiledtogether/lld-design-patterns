// Enum for Log Level
enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    ERROR = "ERROR"
}

// Abstraction Layer: Interface for Products
class ILogger {
    log(msg: string) {}
}

// Low level module: Classes for Products
class DebugLogger extends ILogger {
    log(msg: string){
        console.log(`${LogLevel.DEBUG}: ${msg}`);
    }
}

class InfoLogger extends ILogger {
    log(msg: string){
        console.log(`${LogLevel.INFO}: ${msg}`);
    }
}

class ErrorLogger extends ILogger {
    log(msg: string){
        console.log(`${LogLevel.ERROR}: ${msg}`);
    }
}

// Interface for Concrete Factory
class ILoggerFactory {
    createLogger() {}
}

// Class for Concrete Products for Instantiating Objects 
class DebugLoggerFactory extends ILoggerFactory {
    createLogger(): ILogger {
        return new DebugLogger()
    }
}

class InfoLoggerFactory extends ILoggerFactory {
    createLogger(): ILogger {
        return new InfoLogger()
    }
}

class ErrorLoggerFactory extends ILoggerFactory {
    createLogger(): ILogger {
        return new ErrorLogger()
    }
}

// High Level Module(Client): Main Method
function main() {
    const infoLoggerFactory = new InfoLoggerFactory()
    const logger: ILogger = infoLoggerFactory.createLogger();

    logger.log("This is a log message");
}

main()