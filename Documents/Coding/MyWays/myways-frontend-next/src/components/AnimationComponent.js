import React, { Fragment } from "react"
import animation from "../assets/page_not_found.json"
import Lottie from "react-lottie"

const AnimationComponent = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    return (
        <Fragment>
            <Lottie options={defaultOptions} style={{ display: "block" }} />
        </Fragment>
    )
}

export default AnimationComponent
