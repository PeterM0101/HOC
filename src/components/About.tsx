import React, {FC} from 'react';
import {withHoverEffect} from "../HOC/withHoverEffect";

interface AboutProps {
    hovered: boolean
}

const About: FC<AboutProps> = ({hovered}) => {
    return (
        <div style={{color: `${hovered ? 'green' : ''}`}}>
            About
        </div>
    );
};

export default withHoverEffect(About);
