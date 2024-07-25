#pragma once
#include "ilogger_factory.hpp"

class ErrorLoggerFactory : public ILoggerFactory {
    public:
        ILogger* createLogger() {
            return new ErrorLogger();
        }
};