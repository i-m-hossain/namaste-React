import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Cart from "../components/common/Cart";
import RestaurantMenu from "../components/RestaurantMenu";
import { MENU_DATA } from "../__mocks__/RESTAURANT_DATA";
import store from "../store/store";
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MENU_DATA),
    })
);
test("Add items to the cart", async () => {
    const restaurantMenu = render(
        <StaticRouter>
            <Provider store={store}>
                <Cart></Cart>
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(restaurantMenu.getAllByTestId("add-to-cart")));
    const addButton = restaurantMenu.getAllByTestId("add-to-cart")[0];
    fireEvent.click(addButton);
    const cart = restaurantMenu.getByTestId("cart");
    expect(cart.innerHTML).toBe("1");
});
