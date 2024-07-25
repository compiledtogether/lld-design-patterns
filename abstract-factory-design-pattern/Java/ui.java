import java.util.Scanner;

interface IButton {
    void press();
}

interface ITextBox {
    void setText();    
}

class MacButton implements IButton {
    @Override
    public void press() {
        System.out.println("Mac button pressed.");
    }
}

class WindowsButton implements IButton {
    @Override
    public void press() {
        System.out.println("Windows button pressed.");
    }

}
class MacTextBox implements ITextBox {
    @Override
    public void setText() {
        System.out.println("Setting text in Mac TextBox.");
    }
}

class WindowsTextBox implements ITextBox {
    @Override
    public void setText() {
        System.out.println("Setting text in Windows TextBox.");
    }
}

interface IFactory {
    IButton createButton();
    ITextBox createTextBox();
}

class WindowsFactory implements IFactory {
    @Override
    public IButton createButton() {
        return new WindowsButton();
    }

    @Override
    public ITextBox createTextBox() {
        return new WindowsTextBox();
    }
}

class MacFactory implements IFactory {
    @Override
    public IButton createButton() {
        return new MacButton();
    }

    @Override
    public ITextBox createTextBox() {
        return new MacTextBox();
    }
}

class GUIAbstractFactory {
    public static IFactory createFactory(String osType){
        if(osType.equals("windows")){
            return new WindowsFactory();
        }
        else if(osType.equals("mac")){
            return new MacFactory();
        }
        return null;
    }
}

public class ui {
    public static void main(String[] args){
        System.out.println("Enter Machine OS: ");
        Scanner scanner = new Scanner(System.in);
        String osType = scanner.nextLine();
        scanner.close();

        IFactory factory = GUIAbstractFactory.createFactory(osType);

        if(factory!=null){
            IButton button = factory.createButton();
            button.press();

            ITextBox textBox = factory.createTextBox();
            textBox.setText();
        }
        else {
            System.err.println("Invalid OS Type!!");
        }
    }
}
