/**
 * Using templates in web components
 */
class MyParagraph extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({mode: 'open'});
	}

	connectedCallback() {
		const tmpl = document.getElementById('my-paragraph-template').content;

		this.shadowRoot.appendChild(tmpl.cloneNode(true));
	}
}

customElements.define('my-paragraph', MyParagraph);
