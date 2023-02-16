import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";
import { getUniqueCartItems } from "../utils/getUniqueCartItems";
import CartItem from "./CartItem";
import Wrapper from "./Wrapper";

function CartItems() {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            {items.length > 0 && (
                <div className="flex justify-between mb-6">
                    <h4 className="text-center font-bold text-2xl mb-4">
                        Cart Items
                    </h4>
                    <button
                        onClick={() => dispatch(clearCart())}
                        className="border py-2 px-3 bg-pink-200 rounded font-medium text-gray-400 hover:text-gray-800 hover:bg-pink-500"
                    >
                        Clear Cart
                    </button>
                </div>
            )}
            <ul role="list" class="-my-6 divide-y divide-gray-200 mb-6 pb-6">
                {items.length > 0 ? (
                    getUniqueCartItems(items).map((item) => (
                        <CartItem item={item} />
                    ))
                ) : (
                    <h4>There is no items in the cart</h4>
                )}
            </ul>
        </Wrapper>
    );
}

export default CartItems;
