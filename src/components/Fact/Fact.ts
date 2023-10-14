export enum AttributeFact{
    "fact" = "fact"
}

export default class Fact extends HTMLElement {
    fact?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeFact, null> = {
            fact: null,
        }

        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: AttributeFact, _:unknown, newValue:string){
        switch (propName) {
            default:
                this[propName]= newValue;
            break;
        }
    }

    constructor(){
        super();
        this.attachShadow ({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this,this.shadowRoot){
            this.shadowRoot.innerHTML = `<section class= card>
            <h1>${this.fact}</h1>`
        }
    }

}

customElements.define('app-fact', Fact)