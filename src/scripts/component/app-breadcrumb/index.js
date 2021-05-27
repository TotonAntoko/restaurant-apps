import styles from './app-breadcrumb.styles.scss'

class AppBreadcrumb extends HTMLElement {
  set title (name) {
    this._title = name
    this.render()
  }

  async render () {
    this.innerHTML = `
      <style>
        ${styles}
      </style>
      <ol class="breadcrumb container">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Restaurant List</a></li>
        <li class="breadcrumb-item active">${this._title}</li>
      </ol>
    `
  }
}

customElements.define('app-breadcrumb', AppBreadcrumb)
