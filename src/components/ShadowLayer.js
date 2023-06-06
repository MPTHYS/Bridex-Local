import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { toggleShadow } from '../redux/reducers/sharedReducers';



function ShadowLayer(props) {
    const dispatch = useDispatch()
    const { flag } = useSelector(state => state.shared)
    useEffect(() => {
        let html = document.querySelector("html")
        let shadowLayer = document.querySelector(".shadowlayer")

        if (flag) {
            shadowLayer.classList.add("active")
            html.style.overflow = "hidden"
        } else {
            setTimeout(() => shadowLayer.classList.remove("active"), 300)
            html.style.overflow = "auto"
        }
    }, [flag])

    return (
        <>
            <div
                style={{ top: 0 }}
                className={`shadowlayer`}
                onClick={() => dispatch(toggleShadow(!flag))}
            >
                <div className={`shadowlayer-block ${flag && "active"}`} />
            </div>
        </>
    );
}

export default ShadowLayer