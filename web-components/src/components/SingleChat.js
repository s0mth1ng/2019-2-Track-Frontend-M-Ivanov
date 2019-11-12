const template = document.createElement('template')
template.innerHTML = `<style>
  .avatar {
    padding: 7px;
    width: 60px;
  }

  .chat {
    display: flex;
    width: calc(100% - 2px);
    align-items: center;
    border: 1px solid lightgray;
  }

  img {
    width: 100%;
    height: auto;
  }

  .status {
    display: flex;
    padding-right: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .last-message, .time {
    color: #555555;
  }

  .time {
    font-size: small;
  }

  .counter {
    display: none;
    line-height: 25px;
    font-size: small;
    padding: 2px 10px 2px 10px;
    border-radius: 2em;
    background: #D6E5FA;
  }
  
  .read {
    background-color: #4F6EA3;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }

  .content {
    padding-left: 10px;
    padding-bottom: 5px;
    width: 100%;
  }
</style>
<div class="chat">
  <div class="avatar">
    <img src="images/avatar2.png" alt="Profile image">
  </div>
  <div class="content">
    <div class="name"></div>
    <div class="last-message"></div>
  </div>
  <div class="status">
    <div class="time"></div>
    <div class="counter"></div>
    <div class="read"></div>
  </div>
</div>
`

class SingleChat extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$avatar = this._shadowRoot.querySelector('.avatar')
    this.$time = this._shadowRoot.querySelector('.time')
    this.$counter = this._shadowRoot.querySelector('.counter')

    this.$name = this._shadowRoot.querySelector('.name')
    this.$last_message = this._shadowRoot.querySelector('.last-message')
  }

  set name(name) {
    this.$name.innerText = name
  }

  set time(time) {
    this.$time.innerText = time
  }

  set counter(counter) {
    this.$counter.innerText = counter
  }

  set last_message(last_message) {
    this.$last_message.innerText = last_message
  }

  get name() {
    return this.$name.innerText
  }

  get time() {
    return this.$time.innerText
  }

  get counter() {
    return this.$counter.innerText
  }

  get last_message() {
    return this.$last_message.innerText
  }

}

customElements.define('single-chat', SingleChat)
