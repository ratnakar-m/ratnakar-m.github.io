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
            <div>My musing for the day</div>
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


                    <div>
                        <iframe src="https://www.youtube.com/embed/__qkzfWhi6g" title="dummy" style={{width: '40vw', height: '50vh'}} frameBorder="0" allowfullscreen="allowFullScreen"></iframe>
                    </div>
                </div>
        </Layout>
    )

}