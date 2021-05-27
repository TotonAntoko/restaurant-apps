import {
  createLikeButtonTemplate,
  createLikedButtonTemplate
} from '../views/templates/template-creator'

const LikeButtonInitiator = {
  async init ({
    likeButtonContainer
  }) {
    this._likeButtonContainer = likeButtonContainer
    await this._renderButton()
  },

  async _renderButton () {
    this._renderLike()
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
