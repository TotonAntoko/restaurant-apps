import API_ENDPOINT from '../globals/api-endpoint'
import CONFIG from '../globals/config'

class RestaurantSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.RESTAURANT.LIST)
    const responseJSON = await response.json()
    return responseJSON.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT.DETAIL(id))
    const responseJSON = await response.json()
    return responseJSON.restaurant
  }

  static async reviewRestaurant (data) {
    const response = await fetch(API_ENDPOINT.RESTAURANT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        review: data.review
      })
    })
    return response.json()
  }
}

export default RestaurantSource
