/**
 * The difference Shadow DOM between open and closed
 *
 * refer https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af
 */

class MyShadowOpen extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({mode: 'open'})
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = '<p>I am a open mode shadow dom</p>';
	}
}

customElements.define('my-shadow-open', MyShadowOpen);

class MyShadowClosed extends HTMLElement {
	constructor() {
		super();

		this._root = this.attachShadow({mode: 'closed'});
	}

	connectedCallback() {
		this.shadowRoot && (this.shadowRoot.innerHTML = '<p>I am a closed mode shadow dom</p>');

		//
		this._root && (this._root.innerHTML = '<p>You can still access shadowRoot from _root</p>')
	}
}

customElements.define('my-shadow-closed', MyShadowClosed);

// directly attach shadow dom
document.addEventListener('DOMContentLoaded', function() {
	const $el = document.getElementById('directly-shadow');
	$el.attachShadow({mode: 'open'});
	$el.shadowRoot.innerHTML = 'I am a directly shadow dom';
});
