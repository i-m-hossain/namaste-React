const { render } = require("@testing-library/react");
import Header from "../components/Header";
test("logo will be loaded when header renders", () => {
    render(<Header />);
});
