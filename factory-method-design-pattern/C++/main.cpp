#include "info_logger_factory.hpp"
#include "debug_logger_factory.hpp"
#include "error_logger_factory.hpp"

int main() {
    ILoggerFactory* loggerFactory = new ErrorLoggerFactory();
    ILogger* logger = loggerFactory->createLogger();

    logger->log("This is a log message");

    delete logger;
    
    return 0;
}