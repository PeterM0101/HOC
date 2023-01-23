import {ComponentType, ReactNode, useContext} from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../store/AuthContext";
import {PostsProps} from "../components/Posts";

export const withAuthRedirect = (PassedComponent: ComponentType<PostsProps>): (props: PostsProps) => (JSX.Element) => {

    return (props: PostsProps) => {
        const {authenticated} = useContext(AuthContext)
        if (!authenticated) {return <Navigate to="/" replace={true} />}
        return <PassedComponent {...props as PostsProps}/>
    }
}
