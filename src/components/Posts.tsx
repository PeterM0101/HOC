import React, {FC} from 'react';
import {withAuthRedirect} from "../HOC/withAuthRedirect";

export interface PostsProps {
    title: string
}

const Posts: FC<PostsProps> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    );
};

export default withAuthRedirect(Posts);
