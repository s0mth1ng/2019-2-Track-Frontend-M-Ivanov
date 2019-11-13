const template = document.createElement('template')
template.innerHTML = `<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 12px);
    height: 35px;
    padding: 5px;
    border: 1px solid darkgrey;
    background: #4F6EA3;
  }

  .app_name {
    color: white;
  }

  .menu-button, .search-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .menu-button:hover, .search-button:hover {
    -webkit-transition: all 0.3s ease;
    opacity: 0.6;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

  img {
    height: 35px;
  }

</style>
<div class="container">
  <div class="menu-button">
    <img src="images/menu.png" alt="Menu button">
  </div>
  <div class="app_name">Fkontakte v1.0.1</div>
  <div class="search-button">
    <img src="images/search.png" alt="Search button">
  </div>
</div>
`

class ChatListHeader extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$menu_button = this._shadowRoot.querySelector('.menu-button')
    this.$search_button = this._shadowRoot.querySelector('.search-button')
  }

  set name(name) {
    this.$name.innerText = name
  }

  get search_button() {
    return this.$search_button
  }

  get menu_button() {
    return this.$menu_button
  }

}

customElements.define('chat-list-header', ChatListHeader)