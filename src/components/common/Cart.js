import React from "react";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart({ iconSize = 25 }) {
    const { items } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    return (
        <div className="mr-8 relative">
            <button onClick={() => navigate("/cart")}>
                <BsCart size={iconSize} />
                <div
                    className="absolute top-[-15px] left-5 border bg-[#ff3e00] rounded-full text-white w-7 h-7 text-center"
                    data-testid="cart"
                >
                    {items.length}
                </div>
            </button>
        </div>
    );
}

export default Cart;
