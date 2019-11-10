const template = document.createElement('template')
template.innerHTML = `<style>
  input {
    font-size: x-large;
    height: 40px;
    padding: 10px;
    border: 1px solid darkgrey;
    border-radius: 35px;
    outline: none;
    width: calc(100% - 22px);
  }

  .container {
    padding-right: 5px;
    display: flex;
    flex-direction: row;
  }
  
  .attach {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  img {
    transform: rotate(90deg);
    height: 40px;
  }

</style>
<div class="container">
  <div class="attach">
    <img src="images/attach.png" alt="Attachment button">
  </div>
  <input type="text">
</div>
`

class FormInput extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$input = this.shadowRoot.querySelector('input')
  }

  clear() {
    this.$input.value = ''
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue)
  }

  get value() {
    return this.$input.value
  }
}

customElements.define('form-input', FormInput)
