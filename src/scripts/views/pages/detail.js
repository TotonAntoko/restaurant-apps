import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/restaurant-source'

import { createRestaurantMenusTemplate } from '../templates/template-creator'

import '../../component/restaurant-detail-header'

const Detail = {
  async render () {
    return `
      <div class="main-header">
        <restaurant-detail-header></restaurant-detail-header>
      </div>
      <div class="container">
        <div class="main-menu"></div>
      </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.detailRestaurant(url.id)
    const headerRestaurant = document.querySelector('restaurant-detail-header')
    headerRestaurant.content = restaurant
    console.log(restaurant)

    // Get Menu Categories
    Object.keys(restaurant.menus).map((category) => $('.main-menu').append(createRestaurantMenusTemplate(category, restaurant.menus)))
  }
}

export default Detail
