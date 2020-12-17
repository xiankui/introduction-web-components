/**
 * my custom element
 */
class MyFirstCustomElement extends HTMLElement {
	constructor() {
		// 继承 HTMLElement
		super();

		this.textContent = 'See, this is my first custom element!';
	}
}

customElements.define('my-first-custom-element', MyFirstCustomElement);


/**
 * What is shadow dom
 */
class MyShadowDom extends HTMLElement {
	constructor() {
		// 继承 HTMLElement
		super();

		this.attachShadow({mode: 'open'});

		this.shadowRoot.textContent = 'See, this is shadow dom!';
	}
}

customElements.define('my-shadow-dom', MyShadowDom);

/**
 * HTML Template
 */
const template = document.createElement('template');

template.innerHTML = `
	<style>
	  p {
	    color: red;
	    background-color: #666;
	    padding: 5px;
	  }
	</style>
	<p>My element from template!</p>
`;

class MyElementFromTemplate extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({mode: 'open'});

		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

customElements.define('my-element-from-template', MyElementFromTemplate);

