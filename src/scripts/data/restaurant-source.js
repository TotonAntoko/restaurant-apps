import API_ENDPOINT from '../globals/api-endpoint'

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
}

export default RestaurantSource
