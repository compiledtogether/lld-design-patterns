package logger;

public class DebugLoggerFactory implements ILoggerFactory {
    public ILogger createLogger(){
        return new DebugLogger();
    }
}
