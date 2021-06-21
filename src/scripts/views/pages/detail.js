import swal from 'sweetalert'
import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/restaurant-source'
import LikeButtonInitiator from '../../utils/like-button-initiator'

import { createRestaurantMenusTemplate, createCustomerReviewTemplate } from '../templates/template-creator'

import '../../component/app-breadcrumb'
import '../../component/restaurant-detail-header'
import '../../component//restaurant-detail-header-skeleton'

const Detail = {
  async render () {
    return `
      <div class="main-header">
        <app-breadcrumb></app-breadcrumb>
        <restaurant-detail-header-skeleton></restaurant-detail-header-skeleton>
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
        <div id="likeButtonContainer"></div>
      </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.detailRestaurant(url.id)
    const headerRestaurant = document.querySelector('restaurant-detail-header')
    const appBreadcrumb = document.querySelector('app-breadcrumb')
    headerRestaurant.content = restaurant
    $('restaurant-detail-header-skeleton').remove()
    console.log(restaurant)

    // Set Title Breadcrumb Active
    appBreadcrumb.title = restaurant.name

    // Get Menu Categories
    Object.keys(restaurant.menus).map((category) => $('.main-menu').append(createRestaurantMenusTemplate(category, restaurant.menus)))

    // Get Customer Review
    restaurant.customerReviews.map((review) => $('.main-review').append(createCustomerReviewTemplate(review)))

    // Add New Customer Review
    await this.addCustomerReviews(url.id)

    // Button Like
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description
      }
    })
  },

  async addCustomerReviews (id) {
    $('#submitReview').click(event => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const review = document.getElementById('review').value

      if (name !== '' || review !== '') {
        const reviewData = {
          id,
          name,
          review
        }

        RestaurantSource.reviewRestaurant(reviewData)
          .then((data) => {
            if (data.customerReviews) {
              swal('Thank You for Your Review', 'Your review has been sent successfully', 'success')

              $('.main-review').html('')
              document.getElementById('name').value = ''
              document.getElementById('review').value = ''
              data.customerReviews.map((newReview) => $('.main-review').append(createCustomerReviewTemplate(newReview)))
            }
          })
      } else {
        swal('Sorry!', 'Please fill out the form completely to add your review!', 'error')
      }
    })
  }
}

export default Detail
