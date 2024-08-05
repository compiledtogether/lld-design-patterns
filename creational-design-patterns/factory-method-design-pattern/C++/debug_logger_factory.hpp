#pragma once
#include "ilogger_factory.hpp"

class DebugLoggerFactory : public ILoggerFactory {
    public:
        ILogger* createLogger() {
            return new DebugLogger();
        }
};