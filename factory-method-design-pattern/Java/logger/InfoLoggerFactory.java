package logger;

public class InfoLoggerFactory implements ILoggerFactory {
    public ILogger createLogger(){
        return new InfoLogger();
    }
}
