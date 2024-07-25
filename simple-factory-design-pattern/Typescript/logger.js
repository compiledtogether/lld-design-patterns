var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
var ILogger = /** @class */ (function () {
    function ILogger() {
    }
    ILogger.prototype.log = function (msg) { };
    return ILogger;
}());
var DebugLogger = /** @class */ (function (_super) {
    __extends(DebugLogger, _super);
    function DebugLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugLogger.prototype.log = function (msg) {
        console.log("".concat(LogLevel.DEBUG, ": ").concat(msg));
    };
    return DebugLogger;
}(ILogger));
var InfoLogger = /** @class */ (function (_super) {
    __extends(InfoLogger, _super);
    function InfoLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoLogger.prototype.log = function (msg) {
        console.log("".concat(LogLevel.INFO, ": ").concat(msg));
    };
    return InfoLogger;
}(ILogger));
var ErrorLogger = /** @class */ (function (_super) {
    __extends(ErrorLogger, _super);
    function ErrorLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorLogger.prototype.log = function (msg) {
        console.log("".concat(LogLevel.ERROR, ": ").concat(msg));
    };
    return ErrorLogger;
}(ILogger));
var LoggerFactory = /** @class */ (function () {
    function LoggerFactory() {
    }
    LoggerFactory.createLogger = function (logLevel) {
        switch (logLevel) {
            case LogLevel.DEBUG:
                return new DebugLogger();
            case LogLevel.INFO:
                return new InfoLogger();
            case LogLevel.ERROR:
                return new ErrorLogger();
        }
    };
    return LoggerFactory;
}());
function main() {
    var logger = LoggerFactory.createLogger(LogLevel.ERROR);
    logger.log("This is a log message");
}
main();
