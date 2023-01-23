import React, {FC, ReactNode, useState} from 'react';
import { AuthContext } from './AuthContext';

interface AuthContextProviderProps {
    children: ReactNode
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({children}) => {
    const [auth, setAuth] = useState(false)

    return (
        <AuthContext.Provider value={{
            authenticated: auth,
            toggleAuth: () =>setAuth(prevState => !prevState)
        }
        }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
