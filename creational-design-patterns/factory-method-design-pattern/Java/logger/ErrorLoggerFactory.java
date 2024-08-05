package logger;

public class ErrorLoggerFactory implements ILoggerFactory  {
    public ILogger createLogger(){
        return new ErrorLogger();
    }
}
