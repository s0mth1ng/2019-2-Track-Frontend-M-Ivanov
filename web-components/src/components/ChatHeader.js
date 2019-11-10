const template = document.createElement('template')
template.innerHTML = `<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    border: 1px solid darkgrey;
    background: #4F6EA3;
  }

  .avatar {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  .options-button, .back-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .options-button:hover, .back-button:hover {
    -webkit-transition: all 0.3s ease;
    opacity: 0.6;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
  
  .account {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .name {
    line-height: 20px;
    color: white;
  }

  .status {
    line-height: 15px;
    font-size: medium;
    color: greenyellow;
  }

  img {
    height: 35px;
  }

</style>
<div class="container">
  <div class="back-button">
    <img src="images/back.png" alt="Back button">
  </div>
  <div class="account">
    <div class="avatar">
      <img src="images/avatar.png" alt="Profile image">
    </div>
    <div class="info">
      <div class="name">John Doe</div>
      <div class="status">online</div>
    </div>
  </div>
  <div class="options-button">
    <img src="images/options.png" alt="Options button">
  </div>
</div>
`

class ChatHeader extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$back_button = this._shadowRoot.querySelector('.back-button')
    this.$options_button = this._shadowRoot.querySelector('.options-button')
    this.$avatar = this._shadowRoot.querySelector('.avatar')
    this.$name = this._shadowRoot.querySelector('.name')
  }

  set name(name) {
    this.$name.innerText = name
  }

  get back_button() {
    return this.$back_button
  }

  get options_button() {
    return this.$options_button
  }

}

customElements.define('chat-header', ChatHeader)
