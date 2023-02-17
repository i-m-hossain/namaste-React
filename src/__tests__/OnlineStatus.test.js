import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import '@testing-library/jest-dom'
import Header from "../components/Header";
import store from "../store/store";

test("online status should be okay if device is online", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const onlineStatus = header.getByTestId('online-status')
    expect(onlineStatus).toBeInTheDocument
});
