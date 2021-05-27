import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/restaurant-source'

import { createRestaurantMenusTemplate, createCustomerReviewTemplate } from '../templates/template-creator'

import '../../component/restaurant-detail-header'

const Detail = {
  async render () {
    return `
      <div class="main-header">
        <restaurant-detail-header></restaurant-detail-header>
      </div>
      <div class="container">
        <div class="main-menu"></div>
        <div class="main-list" style="margin-top: 40px;">
          <div class="main-header">
            <div class="main-title">
              <h1>Review</h1>
            </div>
          </div>
          <form class="main-form">
            <div class="col-form">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" value="">
            </div>
            <div class="col-form">
              <label for="review">Review</label>
              <textarea id="review" name="review" placeholder="Your review here..." rows="5"></textarea>
            </div>
            <button id="submitReview" aria-label="submit review" class="btn btn-warning">Submit</button>
          </form>
          <div class="main-review"></div>
        </div>
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

    // Get Customer Review
    restaurant.customerReviews.map((review) => $('.main-review').append(createCustomerReviewTemplate(review)))
  }
}

export default Detail
