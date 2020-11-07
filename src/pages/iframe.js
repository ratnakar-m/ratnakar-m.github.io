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
                <div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/__qkzfWhi6g" title="dummy"  frameBorder="0" allowfullscreen="allowFullScreen"></iframe>
                    </div>
                </div>
        </Layout>
    )

}