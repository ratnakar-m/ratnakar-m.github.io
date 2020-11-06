import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'
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
           
            <div className='svgWrapper'>
                <Bar></Bar>
                <Line></Line>

            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/__qkzfWhi6g" title="dummy"
                        style={{width: '40vw', height: '50vh'}} frameBorder="0"
                        allowFullScreen="allowFullScreen"></iframe>
            </div>
        </Layout>
    )
}