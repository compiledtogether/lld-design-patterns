#include "logger_factory.hpp"

ILogger* LoggerFactory::createLogger(LogLevel pLogLevel){
    if(pLogLevel == LogLevel::DEBUG)
        return new DebugLogger();
    else if(pLogLevel == LogLevel::INFO)
        return new InfoLogger();
    else if(pLogLevel == LogLevel::ERROR)
        return new ErrorLogger();
    else
        return nullptr;
}