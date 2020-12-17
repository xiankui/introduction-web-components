/**
 * Using slots
 */

class ElementDetails extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({mode: 'open'});
	}

	connectedCallback() {
		const tmpl = document.getElementById('element-details-template').content;

		this.shadowRoot.appendChild(tmpl.cloneNode(true));
	}
}

customElements.define('element-details', ElementDetails);
