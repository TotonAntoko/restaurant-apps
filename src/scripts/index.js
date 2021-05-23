import 'lazysizes'
import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import './component/app-bar'
import './component/hero-image'
import './component/card-restaurant'
import App from './views/app'

const app = new App({
  button: document.querySelector('#drawerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

const contentSelector = document.querySelector('#mainContent')

window.addEventListener('DOMContentLoaded', () => {
  contentSelector.innerHTML = `
    <div class="container">
      <div class="main-list">
        <div class="main-header">
          <div class="main-title">
            <h1>Explore Restaurant</h1>
            <p>Look and Enjoy!</p>
          </div>
        </div>
        <div class="main-content">
          <card-restaurant></card-restaurant>
        </div>
      </div>
    </div>
  `
  const cardRestaurant = document.querySelector('card-restaurant')
  const dataRestaurant = require('../DATA.json')
  cardRestaurant.content = dataRestaurant.restaurants
})
