import {constants} from "../config"

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  totalRatings
}) => {
  return (
    <div className="card">
      <img src={`${constants.imagePrefix}/${cloudinaryImageId}`} alt={name} />
      <h2>{name}</h2>
      <h3>
        Rating: {avgRating} star ({totalRatings})
      </h3>
      <ul>
        {" "}
        Cuisines:
        {cuisines.map((c,i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantCard;
