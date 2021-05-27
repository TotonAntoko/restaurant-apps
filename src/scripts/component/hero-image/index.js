import styles from './hero-image.styles.scss'

class HeroImage extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
      <style>
        ${styles}
      </style>
      <div class="main-hero-image">
        <div class="main-hero-text">
          <h1 tabindex="0">Welcome Back, Toton</h1>
          <p tabindex="0">Explore favorite restaurants in your area.</p>
        </div>
      </div>
    `
  }
}

customElements.define('hero-image', HeroImage)
