import React from "react"
import containerStyles from "./container.module.css"
import PropTypes from "prop-types";

export default function Container({ children }) {
    return <div className={containerStyles.container}>{children}</div>
}
Container.propTypes = {
    children: PropTypes.array
}
