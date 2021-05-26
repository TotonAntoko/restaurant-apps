import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/restaurant-source'

import '../../component/restaurant-detail-header'

const Detail = {
  async render () {
    return `
      <div class="main-header">
        <restaurant-detail-header></restaurant-detail-header>
      </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.detailRestaurant(url.id)
    console.log(restaurant)
  }
}

export default Detail
