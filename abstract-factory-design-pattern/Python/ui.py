class IButton:
    def press(self):
        pass

class ITextBox:
    def set_text(self):
        pass
    
class WindowsButton(IButton):
    def press(self):
        print("Windows button pressed.")

class MacButton(IButton):
    def press(self):
        print("Mac button pressed.")

class WindowsTextBox(ITextBox):
    def set_text(self):
        print("Setting text in Windows TextBox.")

class MacTextBox(ITextBox):
    def set_text(self):
        print("Setting text in Mac TextBox.")

class IFactory:
    def createButton(self):
        pass
    def createTextBox(self):
        pass
    
class WindowsFactory(IFactory):
    def createButton(self):
        return WindowsButton()
    def createTextBox(self):
        return WindowsTextBox()

class MacFactory(IFactory):
    def createButton(self):
        return MacButton()
    def createTextBox(self):
        return MacTextBox()

class GUIAbstractFactory():
    @staticmethod
    def createFactory(os_type):
        if os_type == "windows":
            return WindowsFactory()
        elif os_type == "mac":
            return MacFactory()
        else:
            return None
        
def main():
    os_type = input("Enter Machine OS: ")
    
    factory = GUIAbstractFactory.createFactory(os_type)
    
    if factory is not None:
        button = factory.createButton()
        button.press()
        text_box = factory.createTextBox()
        text_box.set_text()
    else:
        print("Invalid OS Type!!")

if __name__ == "__main__":
    main()