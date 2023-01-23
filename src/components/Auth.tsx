import React, {FC} from 'react';

interface AuthProps {
    auth: boolean,
    toggleAuth: () => void
}

const Auth: FC<AuthProps> = ({toggleAuth, auth}) => {

    return (
        <div style={{width: '150px'}}>
            <label>{auth ? 'authenticated' : 'not authenticated'}
                <input type='checkbox' checked={auth} onChange={toggleAuth}/>
            </label>
        </div>
    );
};

export default Auth;
