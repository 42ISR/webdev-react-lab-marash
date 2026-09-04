import "./Course.css"
const Course = ({title, category, image, duration, level, price, rating}) => {
    return (
        <article class="course-card">
            <img class="course-card__image" src={image} alt={title}/>
          <div class="course-card__body">
            <span class="course-card__category">{category}</span>
            <h3 class="course-card__title">{title}</h3>
            <p class="course-card__meta">{duration} · {level}</p>
            <div class="course-card__footer">
              <span class="course-card__price">{price} ₽</span>
              <span class="course-card__rating">★ {rating}</span>
            </div>
            <button class="btn btn--primary btn--full">Записаться</button>
          </div>
        </article>
    )
}

export default Course


