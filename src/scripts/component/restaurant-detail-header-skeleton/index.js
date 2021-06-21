import styles from './restaurant-detail-header-skeleton.styles.scss'

class RestaurantDetailSkeleton extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
      <style>${styles}</style>
      <div class="restaurant-detail-header-skeleton">
        <div class="background image"></div>
        <div class="p-32">
          <div class="background title"></div>
          <div class="background title end"></div>

          <div class="background content"></div>
          <div class="background content"></div>
          <div class="background content"></div>
          <div class="background content end"></div>
        </div>
      </div>
    `
  }
}

customElements.define('restaurant-detail-header-skeleton', RestaurantDetailSkeleton)
