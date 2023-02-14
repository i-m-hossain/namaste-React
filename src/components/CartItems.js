import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Wrapper from "./Wrapper";

function CartItems() {
    const { items } = useSelector((state) => state.cart);

    return (
        <Wrapper>
            {items.length>0 && <h4 className="text-center font-bold text-xl mb-4">Cart Items</h4>}
            <ul role="list" class="-my-6 divide-y divide-gray-200 mb-6 pb-6">
                {items.length>0 ? (
                    items.map((item) => <CartItem item={item}/>)
                ) : (
                    <h4>There is no items in the cart</h4>
                )}
            </ul>
        </Wrapper>
    );
}

export default CartItems;
