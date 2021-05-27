// components
import '../../component/card-menu'

const createRestaurantMenusTemplate = (category, menus) => `
  <div class="main-list" style="${category === 'drinks' ? 'margin-top: 40px;' : 'margin-top: 0'}">
    <div class="main-header">
      <div class="main-title">
        <h1>${category}</h1>
      </div>
    </div>
    <div class="main-content">
      <card-menu data-category="${category}" data-menu="${encodeURIComponent(JSON.stringify(category === 'foods' ? menus.foods : menus.drinks))}"></card-menu>
    </div>
  </div>
`

const createCustomerReviewTemplate = (review) => `
  <div class="main-card">
    <div class="col-info">
      <h4>${review.name}</h4>
      <p class="note">${review.review}</p>
      <p class="date">${review.date}</p>
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="btn btn-fab">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="btn btn-fab">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantMenusTemplate,
  createCustomerReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
