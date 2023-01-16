const RestaurantCard = ({
  name,
  vendor_hero_listing_image,
  cuisines,
  rating,
  review_number,
}) => {
  return (
    <div className="card">
      <img src={vendor_hero_listing_image} alt={name} />
      <h2>{name}</h2>
      <h3>
        Rating: {rating} star ({review_number})
      </h3>
      <ul>
        {" "}
        Cuisines:
        {cuisines.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantCard;
