import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Cart from "../components/common/Cart";
import { MENU_DATA } from "../__mocks__/RESTAURANT_DATA";
import store from "../store/store";
global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve(MENU_DATA) })
);
test("initial cart items  should be zero", () => {
    const cart = render(
        <StaticRouter>
            <Provider store={store}>
                <Cart />
            </Provider>
        </StaticRouter>
    );
    const item = cart.getByTestId("cart");
    expect(item.innerHTML).toBe("0");
});
