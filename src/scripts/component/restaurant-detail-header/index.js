import CONFIG from '../../globals/config'
import styles from './restaurant-detail-header.styles.scss'
class RestaurantDetailHeader extends HTMLElement {
  set content (data) {
    this._data = data
    this.render()
  }

  async render () {
    const {
      pictureId, name, categories, rating, city, description, address
    } = this._data

    const html = `
      <div class="restaurant-header">
        <div class="container">
          <div class="col-image">
            <img class="lazyload" src="assets/images/loading.gif" ="${CONFIG.IMAGE_BASE_URL.MEDIUM}${pictureId}"
              data-srcset="${CONFIG.IMAGE_BASE_URL.SMALL}${pictureId} 480w, ${CONFIG.IMAGE_BASE_URL.LARGE}${pictureId} 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="${name}" crossorigin="anonymous"/>
          </div>
          <div class="col-info">
            <h1>${name}</h1>
            <div class="categories-info">
              <span>${categories[0].name}</span>
            </div>
            <div class="basic-info">
              <div class="basic-info-col">
                <i class="fa fa-star active" aria-hidden="true"></i>
                <span>${rating}</span>
              </div>
              <div class="basic-info-col">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>${city}</span>
              </div>
            </div>
            <div class="description-info">
              ${description}
            </div>
          </div>
          <div class="col-address-info">
            <h4>Address</h4>
            <p>${address}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=${address}" target="_blank" rel="noopener">See map</a>
          </div>
        </div>
      </div>
    `

    this.innerHTML = `
      <style>
        ${styles}
      </style>
      ${html}
    `
  }
}

customElements.define('restaurant-detail-header', RestaurantDetailHeader)
