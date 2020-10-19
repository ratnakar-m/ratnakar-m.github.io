import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Contact() {
    return (
        <div>
            <Layout headerText="Contact">
                <SEO title="Contact" />
                <h1>Iam reachable at </h1>
                <p>
                    <a href="mailto:ratnakar.mallayagari@gmail.com">ratnakar.mallayagari@gmail.com</a>
                </p>
            </Layout>
        </div>
    )
}