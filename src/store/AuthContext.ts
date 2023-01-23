import React, {createContext} from "react";

interface AuthContext {
    authenticated: boolean,
    toggleAuth: () => void
}

const authContextInit: AuthContext = {
    authenticated: false,
    toggleAuth: () => {}
}

export const AuthContext = createContext(authContextInit);
