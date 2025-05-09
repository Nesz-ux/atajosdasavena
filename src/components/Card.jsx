import PropTypes from "prop-types";
import "./Card.css";
import * as iconHi from "react-icons/hi2";

const Card = ({
  image,
  title,
  description,
  url,
  isfavorite,
  onToggleFavorite,
}) => {
  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    onToggleFavorite();
  };
  return (
    <div className="card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </a>
      <div>
        <button className="favorite-btn" onClick={handleFavoriteClick}>
          {isfavorite ? (
            <iconHi.HiStar color="gold" />
          ) : (
            <iconHi.HiOutlineStar color="gold" />
          )}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isfavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Card;
