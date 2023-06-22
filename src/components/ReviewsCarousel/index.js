import {useState} from 'react'
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const {imgUrl, username, companyName, description} = reviewsList[currentIndex]

  const goToPreviousReview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }

  const goToNextReview = () => {
    if (currentIndex < reviewsList.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <div className="carousel-container">
      <h1>Reviews</h1>
      <div className="review-card">
        <img src={imgUrl} alt={username} className="profile-img" />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
      <div className="navigation-buttons">
        <button
          className="arrow-button"
          onClick={goToPreviousReview}
          data-testid="leftArrow"
          disabled={currentIndex === 0}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-img"
          />
        </button>
        <button
          className="arrow-button"
          onClick={goToNextReview}
          data-testid="rightArrow"
          disabled={currentIndex === reviewsList.length - 1}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow-img"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
