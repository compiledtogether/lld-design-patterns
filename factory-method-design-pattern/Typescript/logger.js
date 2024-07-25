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
// Enum for Log Level
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
// Abstraction Layer: Interface for Products
var ILogger = /** @class */ (function () {
    function ILogger() {
    }
    ILogger.prototype.log = function (msg) { };
    return ILogger;
}());
// Low level module: Classes for Products
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
// Interface for Concrete Factory
var ILoggerFactory = /** @class */ (function () {
    function ILoggerFactory() {
    }
    ILoggerFactory.prototype.createLogger = function () { };
    return ILoggerFactory;
}());
var DebugLoggerFactory = /** @class */ (function (_super) {
    __extends(DebugLoggerFactory, _super);
    function DebugLoggerFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugLoggerFactory.prototype.createLogger = function () {
        return new DebugLogger();
    };
    return DebugLoggerFactory;
}(ILoggerFactory));
var InfoLoggerFactory = /** @class */ (function (_super) {
    __extends(InfoLoggerFactory, _super);
    function InfoLoggerFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoLoggerFactory.prototype.createLogger = function () {
        return new InfoLogger();
    };
    return InfoLoggerFactory;
}(ILoggerFactory));
var ErrorLoggerFactory = /** @class */ (function (_super) {
    __extends(ErrorLoggerFactory, _super);
    function ErrorLoggerFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorLoggerFactory.prototype.createLogger = function () {
        return new ErrorLogger();
    };
    return ErrorLoggerFactory;
}(ILoggerFactory));
// High Level Module(Client): Main Method
function main() {
    var infoLoggerFactory = new InfoLoggerFactory();
    var logger = infoLoggerFactory.createLogger();
    logger.log("This is a log message");
}
main();
