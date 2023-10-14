import { getData } from "../services/getData";

class Dasboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow ({mode: "open"});
    }

    async connectedCallback() {
        const data = await getData();
        this.render(data)
    }

    render(data:any) {
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        data.array.forEach(e => {
            
        });
    }

}