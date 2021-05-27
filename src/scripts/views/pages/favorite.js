import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'

// components
import '../../component/card-restaurant'

const Favorite = {
  async render () {
    return `
      <div class="container">
        <div class="main-list" style="margin-top: 80px;">
          <div class="main-header">
            <div class="main-title">
              <h1>Favorited Restaurant</h1>
            </div>
          </div>
          <div class="main-content">
            <card-restaurant></card-restaurant>
          </div>
        </div>
      </div>
    `
  },

  async afterRender () {
    const cardRestaurant = document.querySelector('card-restaurant')

    const results = await FavoriteRestaurantIdb.getAllRestaurants()
    if (results.length === 0) {
      $('.main-content').html(`<div class="empty-favorite">
            <img src="images/empty-favorite.svg">
            <p>favorite restaurant data not found</p>
        </div>`)
    } else {
      cardRestaurant.content = results
    }
  }
}

export default Favorite
