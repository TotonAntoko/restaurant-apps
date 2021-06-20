import styles from './card-menu.styles.scss'

class CardMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        ${styles}
      </style>
    `

    this._category = this.getAttribute('data-category') || null
    this._data = JSON.parse(decodeURIComponent(this.getAttribute('data-menu'))) || null
    this.render()
  }

  async render() {
    const content = this._data.map((item) => {
      const { name } = item

      return `
        <div class="main-card">
          <div class="col-info">
            <h1>${name}</h1>
          </div>
        </div>`
    })

    $(`card-menu[data-category='${this._category}']`).append(content)
  }
}

if (!customElements.get('card-menu')) { customElements.define('card-menu', CardMenu) }
