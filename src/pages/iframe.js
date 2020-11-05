import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function test()
{

    return (
        <Layout>
            <SEO
                title="Projects"
                keywords={[`gatsby`, `application`, `react`, `projects`]}
            />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        margin: "3rem auto",
                        justifyContent: "space-around",
                        borderStyle: "none",
                    }}
                >

                    <div>this is content for the page</div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/__qkzfWhi6g" title="dummy" style={{width: '600px', height: '400px'}} frameBorder="0" allowfullscreen></iframe>
                    </div>
                </div>
        </Layout>
    )

}