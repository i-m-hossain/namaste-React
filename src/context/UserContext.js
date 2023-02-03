import { createContext } from "react";

const UserContext = createContext({
    user: { name: "dummyName", email: "dummy@gmail.com" },
});
export default UserContext;
