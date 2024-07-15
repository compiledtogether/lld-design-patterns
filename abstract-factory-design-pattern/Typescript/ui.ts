class IButton {
    press() {}
}

class ITextBox {
    setText() {}
}

class WindowsButton extends IButton {
    press() {
        console.log("Windows button pressed.")
    }
}

class MacButton extends IButton {
    press() {
        console.log("Mac button pressed.")
    }
}

class WindowsTextBox extends ITextBox {
    setText() {
        console.log("Setting text in Windows TextBox.")
    }
}

class MacTextBox extends ITextBox {
    setText() {
        console.log("Setting text in Mac TextBox.")
    }
}

class IFactory {
    createButton(): any {}
    createTextBox(): any {}
}

class WindowsFactory {
    createButton(): IButton {
        return new WindowsButton();
    }
    createTextBox(): ITextBox {
        return new WindowsTextBox();
    }
}

class MacFactory {
    createButton(): IButton {
        return new MacButton();
    }
    createTextBox(): ITextBox {
        return new MacTextBox();
    }
}

class GUIAbstractFactory {
    static createFactory(osType: string): IFactory | null {
        if(osType == "mac"){
            return new MacFactory();
        }
        else if(osType == "windows"){
            return new WindowsFactory();
        }
        else{
            return null;
        }
    }
}

function uiMain() {
    const osType = "windows";

    const factory: IFactory | null = GUIAbstractFactory.createFactory(osType);

    if(factory!=null){
        const button: IButton = factory.createButton();
        const textBox: ITextBox = factory.createTextBox();
        button.press();
        textBox.setText();
    }
    else{
        console.log("Invalid OS Type!!");
    }
    
}

uiMain()