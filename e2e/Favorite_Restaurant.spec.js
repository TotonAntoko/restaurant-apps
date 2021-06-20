const assert = require('assert')

Feature('Favorite Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.main-content')
  I.see('favorite restaurant data not found', '.empty-favorite p')
})

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('favorite restaurant data not found', '.empty-favorite p')

  I.amOnPage('/')

  I.seeElement('card-restaurant')

  const firstLocateRestaurant = locate('card-restaurant a').first()
  const firstRestaurant = locate('card-restaurant .title').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstLocateRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('card-restaurant')

  const favoritedRestaurantTitle = await I.grabTextFrom('card-restaurant .title')
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle)

  // Unlike
  I.click(firstLocateRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.empty-favorite p')

  const unFavoritedRestaurant = await I.grabTextFrom('.empty-favorite p')
  assert.strictEqual(unFavoritedRestaurant, 'favorite restaurant data not found')
})
