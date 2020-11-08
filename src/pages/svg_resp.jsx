import React, {useEffect} from 'react'
import SEO from "../components/seo";
import Layout from "../components/layout";
import "../styles/svg_resp.css"

import  Bar from "../components/svg_bar.jsx";
import  Line from "../components/svg_line.js";

export default function SVGPage(){

    useEffect(() => {

    }, []);

    return(
        <Layout headerText="SVG Responsive Page">
            <SEO title="SVG Responsive Page" />

            <div className='container-col'>
                <div className='container'>
                    <Bar></Bar>
                    <Line></Line>
                </div>
                <div className='container' style={{marginTop:'2rem'}}>
                    <iframe src="https://www.youtube.com/embed/__qkzfWhi6g"
                            title="dummy" frameBorder="0"
                            allowFullScreen="allowFullScreen"></iframe>
                </div>
            </div>

        </Layout>
    )
}