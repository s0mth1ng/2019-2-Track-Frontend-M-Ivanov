const template = document.createElement('template')
template.innerHTML = `<style>

  chat-header {
    display: flex;
    flex: 1 1 7%;
  }

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .chat-container {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  
  img {
    height: 30px;
    width: 30px;
  }

  .create {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #4F6EA3;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 5em;
  }

  .create:hover {
    -webkit-transition: all 0.3s ease;
    background: #512da8;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
</style>
<form>
  <chat-list-header></chat-list-header>
  <div class='chat-container'></div>
  <div class="create">
    <img src="images/create_conversation.png" alt="Create chat">
  </div>
</form>
`

class ChatList extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$header = this._shadowRoot.querySelector('chat-list-header')
    this.$chat_container = this._shadowRoot.querySelector('.chat-container')
    this.$create = this._shadowRoot.querySelector('.create')
    this.$lst_chats = JSON.parse(localStorage.getItem('chats-storage')) ||
      [{ 'chat_id': 0, 'counter': 0, 'name': 'John Doe', 'last_message': {'content': '', 'time': ''} },
        { 'chat_id': 1, 'counter': 0, 'name': 'Anonymous', 'last_message': {'content': '', 'time': ''} }]
    this.$chats = []

    this.$create.addEventListener('click', () => alert('Next time..'))

    for (let i = 0; i < this.$lst_chats.length; ++i) {
      const chat = document.createElement('single-chat')
      chat.chat_id = this.$lst_chats[i].chat_id
      chat.counter = this.$lst_chats[i].counter
      chat.name = this.$lst_chats[i].name
      chat.last_message = this.$lst_chats[i].last_message.content
      chat.time = this.$lst_chats[i].last_message.time
      this.$chats.push(chat)
      this.$chat_container.insertBefore(chat, this.$chat_container.firstChild)
    }

  }

  get chats() {
    return this.$chats
  }

  get header() {
    return this.$header
  }

}

customElements.define('chat-list', ChatList)
