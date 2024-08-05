import logger.*;

public class Main {
    public static void main(String[] args) {
        ILogger logger = LoggerFactory.createLogger(LogLevel.DEBUG);

        logger.log("This is a log message");
    }
}