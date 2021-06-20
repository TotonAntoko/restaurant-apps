Feature('Reviewing Restaurants')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('posting review restaurant', async ({ I }) => {
  I.seeElement('card-restaurant')
  I.click(locate('card-restaurant a').first())

  I.seeElement('.main-form')
  I.fillField('name', 'User')
  I.fillField('review', 'Testing')
  I.click('#submitReview')

  I.see('Testing', '.main-review .note')
})
