import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";


export default function Home() {
    console.info("Rendering Home page");

    return (
        <div>
            <Layout headerText="Hello Gatsby!">
                <SEO title="Home" />
                <p>What a world.</p>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
            </Layout>
        </div>

    )
}
