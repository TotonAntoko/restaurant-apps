class RestaurantDetailHeader extends HTMLElement {
  connectedCallback () {
    const html = `
      <h1>This is page details</h1>
    `

    this.innerHTML = `
      ${html}
    `
  }
}

customElements.define('restaurant-detail-header', RestaurantDetailHeader)
