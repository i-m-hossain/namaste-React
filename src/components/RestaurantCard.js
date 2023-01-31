import { constants } from "../config";

const RestaurantCard = ({
    id,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatings,
}) => {
    return (
        <div className="p-4 border  rounded bg-pink-100">
            <img
                src={`${constants.imagePrefix}/${cloudinaryImageId}`}
                alt={name}
            />
            <h2>{name}</h2>
            <h3>
                Rating: {avgRating} star ({totalRatings})
            </h3>
            <ul className="flex space-x-2">
                {" "}
                Cuisines:
                {cuisines?.map((c, i) => (
                    <li key={i}>{c} </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantCard;
