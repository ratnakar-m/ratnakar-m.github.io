import React, {useEffect} from 'react'
import SEO from "../components/seo";
import Layout from "../components/layout";
import "../styles/svg_resp.css"
import "../styles/iframe.css"

import  Bar from "../components/svg_bar.jsx";
import  Line from "../components/svg_line.js";

export default function SVGPage(){

    useEffect(() => {

    }, []);

    return(
        <Layout headerText="SVG Responsive Page">
            <SEO title="SVG Responsive Page" />

            <div style={{ display: "flex", "flexDirection": "column", "justifyContent": "flex-start"}}>
                <div className='svgWrapper'>
                    <Bar></Bar>
                    <Line></Line>
                </div>
                <div className='iframeWrapper'>
                    <iframe src="https://www.youtube.com/embed/__qkzfWhi6g"
                            title="dummy" frameBorder="0"
                            allowFullScreen="allowFullScreen"></iframe>
                </div>
            </div>

        </Layout>
    )
}