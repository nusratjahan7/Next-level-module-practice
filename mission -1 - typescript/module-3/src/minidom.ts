abstract class UIElement {
    constructor(protected id: string) {}
    abstract render(): string;
}

class Input extends UIElement {
    constructor(
        id: string,
        private type: string,
        private placeholder: string,
    ) {
        super(id);
    }
    render() {
        return `<input id=${this.id} type=${this.type} name=${this.id} placeholder="${this.placeholder}" />`;
    }
}

class Button extends UIElement {
    constructor(
        id: string,
        private label: string,
    ) {
        super(id);
    }
    render() {
        return `<button id="${this.id}"> ${this.label} </button>`;
    }
}

class Form extends UIElement {
    private children: UIElement[] = [];

    appendChild(child: UIElement) {
        this.children.push(child);
    }

    render() {
        const childrenHTML = this.children
            .map((child) => child.render())
            .join("\n ");

        return `<form id ="${this.id}" style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; gap: 13px; width: 450px; border-radius: 20px;">\n ${childrenHTML} \n</form>`;
    }
}

const formElemnet = new Form("login-form");

const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");

const submitButton = new Button("submit-btn", "Submit");

formElemnet.appendChild(emailInput);
formElemnet.appendChild(passwordInput);
formElemnet.appendChild(submitButton);

console.log(formElemnet.render());

const rootElement = document.getElementById("root");

if (rootElement) {
    rootElement.innerHTML = formElemnet.render();
}
