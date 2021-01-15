import React, {useState, useLayoutEffect, useEffect} from "react";
import usePrevious from "../../Hooks/usePrevious";

const AnimateSort: React.FC = ({children}) => {
    const prevChildren = usePrevious(children);
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});

    useLayoutEffect(() => {
        // @ts-ignore
        let node = children && children.ref.current
        const newBoundingBox = node.getBoundingClientRect();
        setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        // @ts-ignore
        let node = prevChildren && prevChildren.ref.current
        // @ts-ignore
        const prevBoundingBox = node && node.getBoundingClientRect();
        // @ts-ignore
        setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        // @ts-ignore
        if (prevBoundingBox && (prevBoundingBox.left || prevBoundingBox.right)) {
            // @ts-ignore
            const domNode = children && children.ref.current;
            if(!prevBoundingBox || !boundingBox){
                return;
            }
            // @ts-ignore
            if(boundingBox.left === 0 && boundingBox.right === 0){
                return;
            }

            // @ts-ignore
            const changeInX = prevBoundingBox.left - boundingBox.left;
            // @ts-ignore
            const changeInY = prevBoundingBox.top - boundingBox.top;

            if (changeInX || changeInY) {
                debugger
                requestAnimationFrame(() => {
                    domNode.style.transform = `translate(${changeInX}px, ${changeInY}px)`;
                    domNode.style.transition = "transform 0s";

                    requestAnimationFrame(() => {
                        domNode.style.transform = "";
                        domNode.style.transition = "transform 500ms";
                    });
                });
            }
        }
    }, [boundingBox, prevBoundingBox, children]);

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default AnimateSort;
