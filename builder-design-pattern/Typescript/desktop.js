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
var Desktop = /** @class */ (function () {
    function Desktop() {
        this.motherboard = "";
        this.processor = "";
        this.memory = "";
        this.storage = "";
        this.graphicsCard = "";
    }
    Desktop.prototype.getMotherboard = function () {
        return this.motherboard;
    };
    Desktop.prototype.getProcessor = function () {
        return this.processor;
    };
    Desktop.prototype.getStorage = function () {
        return this.storage;
    };
    Desktop.prototype.getMemory = function () {
        return this.memory;
    };
    Desktop.prototype.getGraphicsCard = function () {
        return this.graphicsCard;
    };
    Desktop.prototype.setMotherboard = function (motherboard) {
        this.motherboard = motherboard;
    };
    Desktop.prototype.setProcessor = function (processor) {
        this.processor = processor;
    };
    Desktop.prototype.setStorage = function (storage) {
        this.storage = storage;
    };
    Desktop.prototype.setMemory = function (memory) {
        this.memory = memory;
    };
    Desktop.prototype.setGraphicsCard = function (graphicsCard) {
        this.graphicsCard = graphicsCard;
    };
    Desktop.prototype.display = function () {
        console.log("Motherboard: ".concat(this.motherboard));
        console.log("Processor: ".concat(this.processor));
        console.log("Storage: ".concat(this.storage));
        console.log("Memory: ".concat(this.memory));
        console.log("Graphics Card: ".concat(this.graphicsCard));
    };
    return Desktop;
}());
//  Abstraction Layer: Interface for DesktopBuilder
var DesktopBuilder = /** @class */ (function () {
    function DesktopBuilder() {
        this.desktop = new Desktop();
    }
    DesktopBuilder.prototype.buildMotherBoard = function () {
    };
    DesktopBuilder.prototype.buildProcessor = function () {
    };
    DesktopBuilder.prototype.buildMemory = function () {
    };
    DesktopBuilder.prototype.buildStorage = function () {
    };
    DesktopBuilder.prototype.buildGraphicsCard = function () {
    };
    DesktopBuilder.prototype.getDesktop = function () {
        return this.desktop;
    };
    return DesktopBuilder;
}());
var DellDesktopBuilder = /** @class */ (function (_super) {
    __extends(DellDesktopBuilder, _super);
    function DellDesktopBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DellDesktopBuilder.prototype.buildMotherBoard = function () {
        this.desktop.setMotherboard("Dell MotherBoard");
    };
    DellDesktopBuilder.prototype.buildProcessor = function () {
        this.desktop.setProcessor("Intel Core i7");
    };
    DellDesktopBuilder.prototype.buildStorage = function () {
        this.desktop.setStorage("32GB DDR4 RAM");
    };
    DellDesktopBuilder.prototype.buildMemory = function () {
        this.desktop.setMemory("1TB SSD + 2TB HDD");
    };
    DellDesktopBuilder.prototype.buildGraphicsCard = function () {
        this.desktop.setGraphicsCard("NVIDIA RTX 3080");
    };
    return DellDesktopBuilder;
}(DesktopBuilder));
var HpDesktopBuilder = /** @class */ (function (_super) {
    __extends(HpDesktopBuilder, _super);
    function HpDesktopBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HpDesktopBuilder.prototype.buildMotherBoard = function () {
        this.desktop.setMotherboard("HP MotherBoard");
    };
    HpDesktopBuilder.prototype.buildProcessor = function () {
        this.desktop.setProcessor("Intel Core i5");
    };
    HpDesktopBuilder.prototype.buildStorage = function () {
        this.desktop.setStorage("16GB DDR4 RAM");
    };
    HpDesktopBuilder.prototype.buildMemory = function () {
        this.desktop.setMemory("512GB SSD + 1TB HDD");
    };
    HpDesktopBuilder.prototype.buildGraphicsCard = function () {
        this.desktop.setGraphicsCard("Integrated Graphics");
    };
    return HpDesktopBuilder;
}(DesktopBuilder));
var DesktopDirector = /** @class */ (function () {
    function DesktopDirector() {
    }
    DesktopDirector.prototype.buildDesktop = function (builder) {
        builder.buildMotherBoard();
        builder.buildProcessor();
        builder.buildStorage();
        builder.buildMemory();
        builder.buildGraphicsCard();
        return builder.getDesktop();
    };
    return DesktopDirector;
}());
// High Level Module(Client): Main Method
function client() {
    var director = new DesktopDirector();
    var dellDesktopBuilder = new DellDesktopBuilder();
    var dellDesktop = director.buildDesktop(dellDesktopBuilder);
    var hpDesktopBuilder = new HpDesktopBuilder();
    var hpDesktop = director.buildDesktop(hpDesktopBuilder);
    console.log("Dell Desktop Specs:");
    dellDesktop.display();
    console.log();
    console.log("HP Desktop Specs:");
    hpDesktop.display();
}
client();
