import 'lazysizes';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './component/app-bar';
import './component/hero-image';
import './component/card-restaurant';

const buttonSelector = document.querySelector('#drawerButton');
const drawerSelector = document.querySelector('#navigationDrawer');
const contentSelector = document.querySelector('#mainContent');

window.addEventListener('DOMContentLoaded', () => {
  buttonSelector.addEventListener('click', (event) => {
    event.stopPropagation();
    drawerSelector.classList.toggle('open');
  });
  contentSelector.addEventListener('click', (event) => {
    event.stopPropagation();
    drawerSelector.classList.remove('open');
  });

  contentSelector.innerHTML = `
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
  `;
  const cardRestaurant = document.querySelector('card-restaurant');
  let dataRestaurant = require('../DATA.json');
  cardRestaurant.content = dataRestaurant.restaurants;
});