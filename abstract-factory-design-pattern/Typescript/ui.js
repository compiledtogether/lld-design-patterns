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
var IButton = /** @class */ (function () {
    function IButton() {
    }
    IButton.prototype.press = function () { };
    return IButton;
}());
var ITextBox = /** @class */ (function () {
    function ITextBox() {
    }
    ITextBox.prototype.setText = function () { };
    return ITextBox;
}());
var WindowsButton = /** @class */ (function (_super) {
    __extends(WindowsButton, _super);
    function WindowsButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsButton.prototype.press = function () {
        console.log("Windows button pressed.");
    };
    return WindowsButton;
}(IButton));
var MacButton = /** @class */ (function (_super) {
    __extends(MacButton, _super);
    function MacButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MacButton.prototype.press = function () {
        console.log("Mac button pressed.");
    };
    return MacButton;
}(IButton));
var WindowsTextBox = /** @class */ (function (_super) {
    __extends(WindowsTextBox, _super);
    function WindowsTextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsTextBox.prototype.setText = function () {
        console.log("Setting text in Windows TextBox.");
    };
    return WindowsTextBox;
}(ITextBox));
var MacTextBox = /** @class */ (function (_super) {
    __extends(MacTextBox, _super);
    function MacTextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MacTextBox.prototype.setText = function () {
        console.log("Setting text in Mac TextBox.");
    };
    return MacTextBox;
}(ITextBox));
var IFactory = /** @class */ (function () {
    function IFactory() {
    }
    IFactory.prototype.createButton = function () { };
    IFactory.prototype.createTextBox = function () { };
    return IFactory;
}());
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createTextBox = function () {
        return new WindowsTextBox();
    };
    return WindowsFactory;
}());
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        return new MacButton();
    };
    MacFactory.prototype.createTextBox = function () {
        return new MacTextBox();
    };
    return MacFactory;
}());
var GUIAbstractFactory = /** @class */ (function () {
    function GUIAbstractFactory() {
    }
    GUIAbstractFactory.createFactory = function (osType) {
        if (osType == "mac") {
            return new MacFactory();
        }
        else if (osType == "windows") {
            return new WindowsFactory();
        }
        else {
            return null;
        }
    };
    return GUIAbstractFactory;
}());
function uiMain() {
    var osType = "windows";
    var factory = GUIAbstractFactory.createFactory(osType);
    if (factory != null) {
        var button = factory.createButton();
        var textBox = factory.createTextBox();
        button.press();
        textBox.setText();
    }
    else {
        console.log("Invalid OS Type!!");
    }
}
uiMain();
