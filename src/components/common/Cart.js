import React from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";

function Cart({ iconSize = 25 }) {
    const {items} = useSelector((state) => state.cart);
    return (
        <div className="mr-8 relative">
            <BsCart size={iconSize} />
            {items.length > 0 && (
                <div className="absolute top-[-15px] left-5 border bg-[#ff3e00] rounded-full text-white w-7 h-7 text-center">
                    {items.length}
                </div>
            )}
        </div>
    );
}

export default Cart;
