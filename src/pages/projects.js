import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import PropTypes from "prop-types";

const Project = props => (
    <div className={styles.Project}>
        <img src={props.thumbnail} className={styles.avatar} alt="Project" />
        <div className={styles.description}>
            <h2 className={styles.projectName}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

Project.propTypes = {
    thumbnail: PropTypes.string,
    projectName: PropTypes.string,
    excerpt: PropTypes.string
}

export default function Projects() {
    return (
        <Container>
            <h1>My Projects</h1>
            <p>Some of my interesting projects...</p>
            <Project
                projectName="Image Classification"
                thumbnail=""
                excerpt="Image Classification. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <Project
                projectName="Hyperparameter Tuning in Deep Networks"
                thumbnail="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="Hyperparameter Tuning in Deep Networks. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    )
}
console.log(styles)