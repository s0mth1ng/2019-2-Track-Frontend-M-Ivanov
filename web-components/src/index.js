import './index.css'

import './components/SingleChat'
import './components/ChatList'
import './components/SingleMessage'
import './components/FormInput'
import './components/MessageForm'
import './components/ChatHeader'
import './components/ChatListHeader'
import './components/HelloPage'

const template = document.createElement('template')
template.innerHTML = `<style>
  .container {
    height: 100%;
  }
</style>

<div class="container">
  <hello-page></hello-page>
</div>`

class MainPage extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$container = this._shadowRoot.querySelector('.container')
    this.$hello_page = this._shadowRoot.querySelector('hello-page')
    this.$hello_page.addEventListener('click', this._onClickToBack.bind(this))
  }

  _onClickToMessageForm(chat_id, event) {
    event.preventDefault()
    this.$container.innerHTML = `<message-form chat_id="${chat_id}"></message-form>`
    this.$message_form = this._shadowRoot.querySelector('message-form')
    this.$chat_header = this.$message_form.header
    this.$back_button = this.$chat_header.back_button
    this.$back_button.addEventListener('click', this._onClickToBack.bind(this))
  }

  _onClickToBack(event) {
    event.preventDefault()
    this.$container.innerHTML = `<chat-list></chat-list>`
    this.$chat_list = this._shadowRoot.querySelector('chat-list')
    this.$header = this.$chat_list.header
    this.$chats = this.$chat_list.chats
    for (let i = 0; i < this.$chats.length; ++i) {
      this.$chats[i].addEventListener('click', this._onClickToMessageForm.bind(this, this.$chats[i].chat_id))
    }
    this.$menu_button = this.$header.menu_button
    this.$menu_button.addEventListener('click', () => alert('In the future there will be menu'))

    this.$search_button = this.$header.search_button
    this.$search_button.addEventListener('click', () => alert('In the future there will be search'))
  }
}

customElements.define('main-page', MainPage)
