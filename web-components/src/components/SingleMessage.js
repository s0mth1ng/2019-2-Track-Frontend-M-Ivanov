const template = document.createElement('template')
template.innerHTML = `<style>

.container {
    position: relative;
    max-width: 75%;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: .8em;
  }

  .time {
    margin-right: 5px;
    margin-bottom: 2px;
    margin-left: 2px;
    font-size: small;
    color: #909193;
    text-align: right;
  }
  
  .status {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .read {
    margin-right: 2px;
    background-color: #4F6EA3;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
  
  .content {
    margin: 15px 15px 5px;
  }
</style>
<div class="content"></div>
<div class="status">
<div class="read"></div>
<div class="time"></div>
</div>
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
