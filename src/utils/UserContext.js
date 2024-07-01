import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",         // pice of information or we can say global object
});

export default UserContext;