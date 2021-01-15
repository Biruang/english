import React, {useState, useLayoutEffect, useEffect} from "react";
import usePrevious from '../../Hooks/usePrevious';
// import calculateBoundingBox from "../../Helpers/calculateBoundingBox";

import './AnimateReorder.css';

const AnimateReorder: React.FC = ({children}) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);

    useLayoutEffect(() => {
        // const newBoundingBox = calculateBoundingBox(children);
        // setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        // const prevBoundingBox = calculateBoundingBox(prevChildren);
        // setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

        if (hasPrevBoundingBox) {
            React.Children.forEach(children, (child) => {
                // @ts-ignore
                const domNode = child && child.ref.current;
                // @ts-ignore
                const firstBox = prevBoundingBox[Number.parseInt(child.key)];
                // @ts-ignore
                const lastBox = boundingBox[Number.parseInt(child.key)];
                if(!firstBox || !lastBox){
                    return;
                }
                debugger

                const changeInX = firstBox.left - lastBox.left;
                const changeInY = firstBox.top - lastBox.top;

                if (changeInX) {
                    requestAnimationFrame(() => {
                        domNode.style.transform = `translate(${changeInX}px, ${changeInY}px)`;
                        domNode.style.transition = "transform 0s";

                        requestAnimationFrame(() => {
                            domNode.style.transform = "";
                            domNode.style.transition = "transform 500ms";
                        });
                    });
                }
            });
        }
    }, [boundingBox, prevBoundingBox, children]);

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default AnimateReorder;
