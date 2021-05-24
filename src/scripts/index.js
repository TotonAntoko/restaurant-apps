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

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage()
  const cardRestaurant = document.querySelector('card-restaurant')
  const dataRestaurant = require('../DATA.json')
  cardRestaurant.content = dataRestaurant.restaurants
})
