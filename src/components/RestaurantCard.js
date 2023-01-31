import { constants } from "../config";

const RestaurantCard = ({
    id,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatings,
    costForTwo
}) => {
    return (
       
            <div class="group relative">
              <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={`${constants.imagePrefix}/${cloudinaryImageId}`} alt={name} class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {name}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500"><span className="font-bold">Rating:</span> {avgRating}/{totalRatings} </p>
                </div>
                <p class="text-sm font-medium text-gray-900">${costForTwo/100}</p>
                
              </div>
              {/* <div>
              <h2 className="font-bold">Cuisines:</h2>
              <ul className="pl-6">
                    {cuisines.map((item, i)=><li className="list-disc">{item}</li>)}
                </ul>
              </div> */}
            </div>
          
    );
};

export default RestaurantCard;
