import styles from './card-restaurant-skeleton.styles.scss'

class CardRestaurantSkeleton extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
      <style>
        ${styles}
      </style>
    `

    const content = () => `
      <div class="main-card">
        <div class="background image"></div>
        <div class="p-32">
          <div class="background title"></div>
          <div class="background title end"></div>

          <div class="background content m-t-24"></div>
          <div class="background content end"></div>
        </div>
      </div>
    `
    $('card-restaurant-skeleton').append(content)
    $('card-restaurant-skeleton').append(content)
    $('card-restaurant-skeleton').append(content)
    $('card-restaurant-skeleton').append(content)
  }
}

customElements.define('card-restaurant-skeleton', CardRestaurantSkeleton)
