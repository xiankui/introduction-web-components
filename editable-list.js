/**
 * editable-list-array
 */

(function() {
	class EditableList extends HTMLElement {
		constructor() {
			super();

			// attaches shadow tree and returns shadow root reference
			// https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
			const shadow = this.attachShadow({ mode: 'open' });

			// creating a container for the editable-list component
			const editableListContainer = document.createElement('div');

			// get attribute values from getters
			const title = this.title;
			const addItemText = this.addItemText;
			const listItems = this.items;

			// adding a class to our container for the sake of clarity
			editableListContainer.classList.add('editable-list');

			// creating the inner HTML of the editable list element
			editableListContainer.innerHTML = `
			  <style>
			    li, div > div {
			      display: flex;
			      align-items: center;
			      justify-content: space-between;
			    }

			    .icon {
			      background-color: #fff;
			      border: none;
			      cursor: pointer;
			      float: right;
			      font-size: 1.8rem;
			    }
			  </style>
			  <h3>${title}</h3>
			  <ul class="item-list">
			    ${this.getItemList(this.items)}
			  </ul>
			  <div>
			    <label>${addItemText}</label>
			    <input class="add-new-list-item-input" type="text"></input>
			    <button class="editable-list-add-item icon">&oplus;</button>
			  </div>
			`;

			shadow.appendChild(editableListContainer);

			this.addBtn = this.shadowRoot.querySelector('.editable-list-add-item');
			this.itemInput = this.shadowRoot.querySelector('.add-new-list-item-input');
			this.list = this.shadowRoot.querySelector('.item-list');

			this.addItem = this.addItem.bind(this);
			this.removeItem = this.removeItem.bind(this);
		}

		get title() {
			return this.getAttribute('title');
		}
		get addItemText() {
			return this.getAttribute('add-item-text');
		}

		get items() {
			const raw = this.getAttribute('list-items');

			return JSON.parse(raw.replace(/\'/g, '"'))
		}

		set items(newItems) {
			return this.setAttribute('list-items', JSON.stringify(newItems));
		}

		static get observedAttributes() { return ['list-items'] }

		getItemList(items) {
			return items.map(item => `
				<li><span>${item}</span>
				  <button class="editable-list-remove-item icon">&ominus;</button>
				</li>
			`).join('')
		}

		renderItemList(items) {
			this.list.innerHTML = this.getItemList(items);
		}

		addItem() {
			const text = this.itemInput.value;

			if (text) {
				const items = this.items;
				items.push(text);

				this.items = items;

				this.itemInput.value = '';
			}
		}

		removeItem(e) {
			const isRemoveBtn = e.target.classList.value.includes('editable-list-remove-item');

			if (!isRemoveBtn) return false;

			const itemText = e.target.previousElementSibling.innerText;

			const items = this.items;
			items.splice(items.indexOf(itemText), 1);

			this.items = items;
		}

		attributeChangedCallback(name, oldValue, newValue) {
			if (name === 'list-items') {
				this.renderItemList(this.items)
			}
		}

		connectedCallback() {
			this.addBtn.addEventListener('click', this.addItem, false);
			this.list.addEventListener('click', this.removeItem, false)
		}
	}

	customElements.define('editable-list', EditableList);
})();