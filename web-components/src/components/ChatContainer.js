/* eslint-disable no-plusplus */
/* eslint-disable semi */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `<style>

  .message-conteiner::-webkit-scrollbar {
    width: 2px;
    background-color: darkgrey;
  }

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  form-input {
    flex: 0 0 auto;
  }
  
  .message {
    position: relative;
    max-width: 75%;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: .8em;
  }
  
  .recieved {    
    margin-left: 5px;
    align-self: flex-start;
    background: white;
  }
  
  .sent {
    margin-right: 5px;
    align-self: flex-end;
    background: #D6E5FA; /*#415DFF;*/
  }

  .message-container {
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    width: calc(100% - 10px);
    height: 100%;
  }

  input[type=submit] {
    visibility: collapse;
  }
</style>
<form>
  <div class='message-container'></div>
  <form-input name="message-text" placeholder="Введите сообщение"></form-input>
</form>
`;

class ChatContainer extends HTMLElement {
  constructor() {
    super();
    this.cnt = 0;
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$messages_container = this._shadowRoot.querySelector('.message-container');

    for (let i = 0; i < localStorage.length; ++i) {
      if (localStorage.getItem(localStorage.key(i)) !== 'INFO') {
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        const message = document.createElement('single-message');
        message.content = obj.content;
        message.time = obj.time;
        message.classList.add('message', 'sent');
        this.$messages_container.insertBefore(message, this.$messages_container.firstChild);
      }
    }

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  _onSubmit(event) {
    event.preventDefault();
    const text = this.$input.value.trim();
    if (text.length !== 0) {
      const message = document.createElement('single-message');
      message.classList.add('message', 'sent');
      message.content = text;
      message.time = (new Date()).toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      });
      this.$messages_container.insertBefore(message, this.$messages_container.firstChild);
      localStorage.setItem(Date.now().toString(), JSON.stringify({ content: message.content, time: message.time }));
      this.$input.clear();
      this.cnt++;
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('chat-container', ChatContainer);