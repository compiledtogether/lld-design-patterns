#include <string>
#include <iostream>

using namespace std;

class IButton {
    public:
        virtual void press() = 0;
};

class ITextBox {
    public:
        virtual void setText() = 0;
};

class WindowsButton : public IButton {
    public:
        void press() {
            cout << "Windows button pressed." << endl;
        }
};

class MacButton : public IButton {
    public:
        void press() {
            cout << "Mac button pressed." << endl;
        }
};

class WindowsTextBox : public ITextBox {
    public:
        void setText() {
            cout << "Setting text in Windows TextBox." << endl;
        }
};

class MacTextBox : public ITextBox {
    public:
        void setText() {
            cout << "Setting text in Mac TextBox." << endl;
        }
};

class IFactory {
    public:
        virtual IButton* createButton() = 0;
        virtual ITextBox* createTextBox() = 0;
};

class WindowsFactory : public IFactory {
    public:
        IButton* createButton() {
            return new WindowsButton();
        }
        ITextBox* createTextBox() {
            return new WindowsTextBox();
        }
};

class MacFactory : public IFactory {
    public:
        IButton* createButton() {
            return new MacButton();
        }
        ITextBox* createTextBox() {
            return new MacTextBox();
        }
};

class GUIAbstractFactory {
    public:
        static IFactory* createFactory(string osType){
            if(osType == "mac"){
                return new MacFactory();
            }
            else if(osType == "windows") {
                return new WindowsFactory();
            }
            else{
                return nullptr;
            }
        }
};

int main() {

    cout << "Enter Machine OS: \n";
    string osType;
    cin >> osType;

    IFactory* factory = GUIAbstractFactory::createFactory(osType);

    IButton* button = factory->createButton();
    ITextBox* textBox = factory->createTextBox();

    button->press();
    textBox->setText();

    return 0;
}