import "./components/export";
import { getData } from "./services/getData";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        try {
            const data = await getData(); 
            console.log(data);
            this.render();
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const something = this.ownerDocument.createElement('getData');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer);
