import './Header.css'

function Header() {

  return (
    <header class="header">
    <div class="container header__inner">
      <div class="logo">Code<span>Camp</span></div>
      <nav class="nav">
        <a href="#" class="nav__link">Курсы</a>
        <a href="#" class="nav__link">Преподаватели</a>
        <a href="#" class="nav__link">Отзывы</a>
        <a href="#" class="nav__link">Контакты</a>
      </nav>
      <button class="btn btn--outline">Войти</button>
    </div>
    </header>
  )
}

export default Header
