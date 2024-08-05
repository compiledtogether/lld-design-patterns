enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    ERROR = "ERROR"
}

class ILogger {
    log(msg: string) {}
}

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

class LoggerFactory {
    static createLogger(logLevel: LogLevel) {
        switch(logLevel){
            case LogLevel.DEBUG:
                return new DebugLogger();
            case LogLevel.INFO:
                return new InfoLogger();
            case LogLevel.ERROR:
                return new ErrorLogger();
        }
    }
}

function main() {
    const logger: ILogger = LoggerFactory.createLogger(LogLevel.ERROR);

    logger.log("This is a log message");
}

main()