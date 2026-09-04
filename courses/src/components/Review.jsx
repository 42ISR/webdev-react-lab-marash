import "./Review.css"
const Review = ({name, avatar, text, course}) => {
    return (
        <div class="review-card">
        <img class="review-card__avatar" src={avatar} alt={name} />
          <div class="review-card__content">
            <p class="review-card__text">{text}</p>
            <span class="review-card__author">{name} — {course}</span>
          </div>
        </div>
    )
}

export default Review