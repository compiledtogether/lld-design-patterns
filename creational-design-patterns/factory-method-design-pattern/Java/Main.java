import logger.*;

public class Main {
    public static void main(String[] args) {

        ILoggerFactory loggerFactory = new ErrorLoggerFactory();
        ILogger logger = loggerFactory.createLogger();

        logger.log("This is a log message");
    }
}