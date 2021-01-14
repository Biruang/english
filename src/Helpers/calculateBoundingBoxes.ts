import React from "react";

// @ts-ignore
const calculateBoundingBoxes = children => {
    const boundingBoxes = {};

    React.Children.forEach(children, child => {
        const domNode = child.ref.current;
        const nodeBoundingBox = domNode.getBoundingClientRect();

        // @ts-ignore
        boundingBoxes[child.key] = nodeBoundingBox;
    });

    return boundingBoxes;
};

export default calculateBoundingBoxes;
