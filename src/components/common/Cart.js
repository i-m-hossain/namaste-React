import React from "react";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartItems from "../CartItems";

function Cart({ iconSize = 25 }) {
    const { items } = useSelector((state) => state.cart);
    const [cartVisible, setCartVisible] = useState(false);
    return (
        <div className="mr-8 relative">
            <button onClick={() => setCartVisible(true)}>
                <BsCart size={iconSize} />
                {items.length > 0 && (
                    <div className="absolute top-[-15px] left-5 border bg-[#ff3e00] rounded-full text-white w-7 h-7 text-center">
                        {items.length}
                    </div>
                )}
            </button>

            {cartVisible && (
                <CartItems closeCartModal={() => setCartVisible(false)} />
            )}
        </div>
    );
}

export default Cart;
