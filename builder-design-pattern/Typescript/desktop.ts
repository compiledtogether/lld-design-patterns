class Desktop {
    private motherboard: string = "";
    private processor: string = "";
    private memory: string = "";
    private storage: string = "";
    private graphicsCard: string = "";

    public getMotherboard(){
        return this.motherboard;
    }
    public getProcessor(){
        return this.processor;
    }
    public getStorage(){
        return this.storage;
    }
    public getMemory(){
        return this.memory;
    }
    public getGraphicsCard(){
        return this.graphicsCard;
    }
    public setMotherboard(motherboard: string){
        this.motherboard = motherboard;
    }
    public setProcessor(processor: string){
        this.processor = processor;
    }
    public setStorage(storage: string){
        this.storage = storage;
    }
    public setMemory(memory: string){
        this.memory = memory;
    }
    public setGraphicsCard(graphicsCard: string){
        this.graphicsCard = graphicsCard;
    }

    public display(){
        console.log(`Motherboard: ${this.motherboard}`);
        console.log(`Processor: ${this.processor}`);
        console.log(`Storage: ${this.storage}`);
        console.log(`Memory: ${this.memory}`);
        console.log(`Graphics Card: ${this.graphicsCard}`);
    }
}

//  Abstraction Layer: Interface for DesktopBuilder
class DesktopBuilder{
    public desktop: Desktop = new Desktop();

    buildMotherBoard() {}
    buildProcessor() {}
    buildMemory() {}
    buildStorage() {}
    buildGraphicsCard() {}

    getDesktop(){
        return this.desktop;
    }
}

class DellDesktopBuilder extends DesktopBuilder{
    buildMotherBoard(){
        this.desktop.setMotherboard("Dell MotherBoard");
    }
    buildProcessor(){
        this.desktop.setProcessor("Intel Core i7");
    }
    buildStorage(){
        this.desktop.setStorage("32GB DDR4 RAM");
    }
    buildMemory(){
        this.desktop.setMemory("1TB SSD + 2TB HDD");
    }
    buildGraphicsCard(){
        this.desktop.setGraphicsCard("NVIDIA RTX 3080");
    }
}

class HpDesktopBuilder extends DesktopBuilder{
    buildMotherBoard(){
        this.desktop.setMotherboard("HP MotherBoard");
    }
    buildProcessor(){
        this.desktop.setProcessor("Intel Core i5");
    }
    buildStorage(){
        this.desktop.setStorage("16GB DDR4 RAM");
    }
    buildMemory(){
        this.desktop.setMemory("512GB SSD + 1TB HDD");
    }
    buildGraphicsCard(){
        this.desktop.setGraphicsCard("Integrated Graphics");
    }
}

class DesktopDirector{
    buildDesktop(builder: DesktopBuilder) {
        builder.buildMotherBoard();
        builder.buildProcessor();
        builder.buildStorage();
        builder.buildMemory();
        builder.buildGraphicsCard();

        return builder.getDesktop();
    }
}

// High Level Module(Client): Main Method
function main() {
    const director: DesktopDirector = new DesktopDirector();

    const dellDesktopBuilder: DellDesktopBuilder = new DellDesktopBuilder();
    const dellDesktop: Desktop = director.buildDesktop(dellDesktopBuilder);
    
    const hpDesktopBuilder: HpDesktopBuilder = new HpDesktopBuilder();
    const hpDesktop: Desktop = director.buildDesktop(hpDesktopBuilder);

    console.log("Dell Desktop Specs:");
    dellDesktop.display();
    console.log();
    console.log("HP Desktop Specs:");
    hpDesktop.display();
}

main()