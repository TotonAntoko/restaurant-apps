import RestaurantSource from '../../data/restaurant-source'
import '../../component/hero-image'
import '../../component/card-restaurant'

const Home = {
  async render () {
    return `
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
  },

  async afterRender () {
    const restaurant = await RestaurantSource.listRestaurant()
    const cardRestaurant = document.querySelector('card-restaurant')
    cardRestaurant.content = restaurant
  }
}

export default Home
