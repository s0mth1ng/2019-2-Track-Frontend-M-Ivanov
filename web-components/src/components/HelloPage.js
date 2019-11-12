const template = document.createElement('template')
template.innerHTML = `<style>
  .main {
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #EBF0F4;
    align-items: center;
    justify-content: center;
    color: #4F6EA3;
  }
</style>
<div class="main">
Click anywhere to continue.
</div>
`

class HelloPage extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('hello-page', HelloPage)
