/* eslint-disable no-underscore-dangle */
/* eslint-disable semi */
const template = document.createElement('template');
template.innerHTML = `<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 5px;
    border: 1px solid darkgrey;
    background: #4F6EA3;
  }
  
  .account {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .name {
    color: white;
  }
  
  .avatar {
    margin-left: 20px;
  }

  img {
    padding-top: 7px;
    width: 35px;
    border-radius: 50%;
  }
</style>
<div class="container">
  <div class="button">
    <a href="https://vk.com/">
      <img src="../../back.png">
    </a>
  </div>
  <div class="avatar">
    <img src="../../avatar.png">
  </div>
  <div class="account">
    <div class="name">John Doe</div>
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
