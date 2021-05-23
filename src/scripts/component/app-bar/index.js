import styles from './app-bar.styles.scss';
import barDesktop from './template/app-bar-desktop.html';
import barMobile from './template/app-bar-mobile.html';
import navigationDrawer from './template/nav-menu.html';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        ${styles}
      </style>
      <header class="fixed">
        <div class="app-bar-overlay">
          ${barMobile}
          ${barDesktop}
        </div>
      </header>
    `;

    $('nav').append(`${navigationDrawer}`);
    $("#navigationDrawer a").each(
      function() {
        window.matchMedia("(min-width: 992px)").matches ? $(this).attr('tabindex', "-1") : '';
      }
    );

    $('.nav-menu > li > a').click((e) => {
      $('.nav-menu > li').removeClass('active');
      if (!$(e.target).closest('li').hasClass('active')) {
        $(e.target).closest('li').addClass('active');
      }
    });
  }
}

customElements.define('app-bar', AppBar);