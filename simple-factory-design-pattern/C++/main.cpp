#include "logger_factory.hpp"

int main() {
    ILogger* logger = LoggerFactory::createLogger(LogLevel::ERROR);

    logger->log("This is a log message");

    delete logger;

    return 0;
}