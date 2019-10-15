/* eslint-disable no-underscore-dangle */
/* eslint-disable semi */
const template = document.createElement('template');
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
    height: 40px;
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
`;

class ChatHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$button = this._shadowRoot.querySelector('.button');
    this.$avatar = this._shadowRoot.querySelector('.avatar');
    this.$name = this._shadowRoot.querySelector('.name');
  }

  set name(name) {
    this.$name.innerText = name;
  }

}

customElements.define('chat-header', ChatHeader);
