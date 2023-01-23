import React, { Component, ComponentType, useState } from "react";

export const withHoverEffect = (
  PassedComponent: ComponentType<any>
): ((props: any) => JSX.Element) => {
  return (props: any) => {
    const [hovered, setHovered] = useState<boolean>(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <PassedComponent {...props} hovered={hovered} />
      </div>
    );
  };
};
