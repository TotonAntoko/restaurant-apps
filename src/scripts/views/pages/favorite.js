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

  async afterRender () {}
}

export default Favorite
