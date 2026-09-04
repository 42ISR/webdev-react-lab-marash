import './Footer.css'

function Footer() {

  return (
    <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__col">
        <div class="logo logo--light">Code<span>Camp</span></div>
        <p class="footer__text">Онлайн-школа программирования с 2018 года</p>
      </div>
      <div class="footer__col">
        <h4 class="footer__title">Разделы</h4>
        <a href="#" class="footer__link">Курсы</a>
        <a href="#" class="footer__link">Преподаватели</a>
        <a href="#" class="footer__link">Отзывы</a>
      </div>
      <div class="footer__col">
        <h4 class="footer__title">Контакты</h4>
        <p class="footer__text">info@codecamp.example</p>
        <p class="footer__text">+7 (999) 123-45-67</p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2026 CodeCamp. Все права защищены.</p>
    </div>
  </footer>)
}

export default Footer