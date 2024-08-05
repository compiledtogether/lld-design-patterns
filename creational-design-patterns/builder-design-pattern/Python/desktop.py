class Desktop:
    def __init__(self) -> None:
        self.__motherboard: str = None
        self.__processor: str = None
        self.__memory: str = None
        self.__storage: str = None
        self.__graphics_card: str = None
    
    def setMotherBoard(self, motherboard):
        self.__motherboard = motherboard
    def setProcessor(self, processor):
        self.__processor = processor
    def setMemory(self, memory):
        self.__memory = memory
    def setStorage(self, storage):
        self.__storage = storage
    def setGraphicsCard(self, graphics_card):
        self.__graphics_card = graphics_card
    
    def getMotherBoard(self):
        return self.__motherboard
    def getProcessor(self):
        return self.__processor
    def getMemory(self):
        return self.__memory
    def getStorage(self):
        return self.__storage
    def getGraphicsCard(self):
        return self.__graphics_card
    
    def display(self):
        print("Motherboard", self.__motherboard)
        print("Processor", self.__processor)
        print("Storage", self.__storage)
        print("Memory", self.__memory)
        print("Graphics Card", self.__graphics_card)
    
# Abstraction Layer: Interface for DesktopBuilder
class DesktopBuilder():
    def __init__(self) -> None:
        self.desktop = Desktop()
        
    def getDesktop(self):
        return self.desktop
    
    def buildMotherBoard(self):
        pass
    def buildProcessor(self):
        pass
    def buildMemory(self):
        pass
    def buildStorage(self):
        pass
    def buildGraphicsCard(self):
        pass
    
class DellDesktopBuilder(DesktopBuilder):
    def buildMotherBoard(self):
        self.desktop.setMotherBoard("Dell MotherBoard")
    def buildProcessor(self):
        self.desktop.setProcessor("Intel Core i7")
    def buildMemory(self):
        self.desktop.setMemory("32GB DDR4 RAM")
    def buildStorage(self):
        self.desktop.setStorage("1TB SSD + 2TB HDD")
    def buildGraphicsCard(self):
        self.desktop.setGraphicsCard("NVIDIA RTX 3080")
        
class HpDesktopBuilder(DesktopBuilder):
    def buildMotherBoard(self):
        self.desktop.setMotherBoard("HP MotherBoard")
    def buildProcessor(self):
        self.desktop.setProcessor("Intel Core i5")
    def buildMemory(self):
        self.desktop.setMemory("16GB DDR4 RAM")
    def buildStorage(self):
        self.desktop.setStorage("512GB SSD + 1TB HDD")
    def buildGraphicsCard(self):
        self.desktop.setGraphicsCard("Integrated Graphics")
        
class DesktopDirector():
    def __init__(self) -> None:
        pass
    
    def buildDesktop(self, builder: DesktopBuilder) -> Desktop:
        builder.buildMotherBoard()
        builder.buildProcessor()
        builder.buildStorage()
        builder.buildMemory()
        builder.buildGraphicsCard()
        return builder.getDesktop()
      
# High Level Module(Client): Main Method  
def main():
    director: DesktopDirector = DesktopDirector()
    
    dellDesktopBuilder: DellDesktopBuilder = DellDesktopBuilder()
    dellDesktop: Desktop = director.buildDesktop(dellDesktopBuilder)
    
    hpDesktopBuilder: HpDesktopBuilder = HpDesktopBuilder()
    hpDesktop: Desktop = director.buildDesktop(hpDesktopBuilder)
    
    print("Dell Desktop Specs:")
    dellDesktop.display()
    print()
    print("Hp Desktop Specs:")
    hpDesktop.display()
    
if __name__ == "__main__":
    main()