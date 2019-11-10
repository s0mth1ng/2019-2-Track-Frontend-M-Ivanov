const template = document.createElement('template')
template.innerHTML = `<style>
  .time {
    margin-right: 5px;
    margin-bottom: 2px;
    margin-left: 2px;
    font-size: medium;
    color: #909193;
    text-align: right;
  }

  .content {
    margin: 15px 15px 5px;
  }
</style>
<div class="content"></div>
<div class="time"></div>
`

class SingleMessage extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$content = this._shadowRoot.querySelector('.content')
    this.$time = this._shadowRoot.querySelector('.time')
  }

  set time(time) {
    this.$time.innerText = time
  }

  set content(text) {
    this.$content.innerText = text
  }

  get time() {
    return this.$time.innerText
  }

  get content() {
    return this.$content.innerText
  }

}

customElements.define('single-message', SingleMessage)
