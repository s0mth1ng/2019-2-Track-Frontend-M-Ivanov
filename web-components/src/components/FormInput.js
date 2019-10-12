/* eslint-disable no-underscore-dangle */
/* eslint-disable semi */
const template = document.createElement('template');
template.innerHTML = `<style>
  input {
    font-size: x-large;
    height: 40px;
    padding: 10px;
    border: 1px solid darkgrey;
    outline: none;
    width: calc(100% - 22px);
  }

</style>
<input type="text">
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$input = this.shadowRoot.querySelector('input');
  }

  clear() {
    this.$input.value = '';
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }
}

customElements.define('form-input', FormInput);
