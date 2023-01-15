import React from "react";
import ReactDOM from "react-dom/client ";
import "./index.css";
import config from "./api/config";
const Header = () => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};
const RestaurantCard = ({name, vendor_hero_listing_image, cuisines, rating , review_number}) => {
  return (
    <div className="card">
      <img src={vendor_hero_listing_image} alt={name}/>
      <h2>{name}</h2>
      <h3>Rating: {rating} star ({review_number})</h3>
      <ul> Cuisines:{cuisines.map(c=> <li key={c.id}>{c.name}</li>)}</ul>
    </div>
  );
};
const RestaurantList=()=>{
  return (
    <div className="restaurant-list">
      {config.items.map((item) => (
        <RestaurantCard {...item.vendor.details} key={item.reservation_code} />
      ))}
    </div>
  )
}
const Body = () => {
  return (
    <RestaurantList/>
  );
};
const Footer = () => <footer>This footer</footer>;

const AppLayout = () => (
  <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
