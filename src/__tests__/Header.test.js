const { render } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../store/store";
import { StaticRouter } from "react-router-dom/server";
test("logo should load on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});
