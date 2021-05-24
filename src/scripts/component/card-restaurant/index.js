import CONFIG from '../../globals/config'
import styles from './card-restaurant.styles.scss'

class CardRestaurant extends HTMLElement {
  set content (items) {
    this._items = items
    this.render()
  }

  async render () {
    this.innerHTML = `
      <style>
        ${styles}
      </style>
    `

    const content = this._items.map((item) => `
        <div class="main-card">
          <div class="col-image">
            <img class="lazyload" src="images/loading.gif" data-src="${CONFIG.IMAGE_BASE_URL.SMALL}${item.pictureId}" data-srcset="${CONFIG.IMAGE_BASE_URL.MEDIUM}${item.pictureId} 480w, ${CONFIG.IMAGE_BASE_URL.LARGE}${item.pictureId} 800w" sizes="(max-width: 600px) 480px, 800px" alt="${item.name}"/>
          </div>
          <div class="col-info">
            <h1 tabindex="0" class="title">${item.name}</h1>
            <div class="basic-info">
              <div class="info-place" tabindex="0" aria-label="alamat ${item.city}">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>${item.city}</span>
              </div>
              <div class="info-rate" tabindex="0" aria-label="rating ${item.rating}">
                <i class="fa fa-star active" aria-hidden="true"></i>
                <span>${item.rating}</span>
              </div>
            </div>
            <p class="additional-info" tabindex="0" aria-label="deskripsi ${item.description}">
              ${item.description}
            </p>
          </div>
        </div>`)

    $('card-restaurant').append(content)
  }
}

customElements.define('card-restaurant', CardRestaurant)
