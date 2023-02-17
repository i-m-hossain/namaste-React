import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Body from "../components/Body";
import { RESTAURANT_DATA } from "../__mocks__/RESTAURANT_DATA";
import store from "../store/store";
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_DATA),
    })
);
test("Restaurants should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("search-button")));
    const resContainer = body.getByTestId("container");
    expect(resContainer.children.length).toBe(15);
});
test("search result of restaurant", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("search-button")));
    const searchInput = body.getByTestId("search-input");
    
    // adding change event to searchInput
    fireEvent.change(searchInput, { target: { value: "momo" } });
    const searchButton = body.getByTestId("search-button");
    
    //now search button should be clicked
    fireEvent.click(searchButton);
    const resContainer = body.getByTestId("container");
    expect(resContainer.children.length).toBe(1);
});

// test("shimmer should load on the body", async() => {
//     global.fetch = jest.fn(() =>
//         Promise.resolve({
//             json: () => Promise.resolve(RESTAURANT_DATA),
//         })
//     );
//     const {getByRole} = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body />
//             </Provider>
//         </StaticRouter>
//     );
//     console.log(getByRole)
//     await waitFor(() => expect(getByRole('combobox')).toHaveValue('hello'))
// });
