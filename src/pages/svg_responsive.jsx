import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'
import SEO from "../components/seo";
import Layout from "../components/layout";
import "../styles/svg_bar.css"

import  Bar from "./svg_bar.jsx";
import  Line from "./svg_line.js";

export default function SVGPage(){

    useEffect(() => {

    }, []);

    return(
        <Layout headerText="SVG Responsive Page">
            <SEO title="SVG Responsive Page" />
            <div className='svgWrapper'>
                <br/>
                <br/>
                <br/>
                <div >
                    <button style={{ marginRight: "10px"}} onClick={() => console.log('clicked')}>Update data</button>
                    <button onClick={() => console.log('clicked')}>Filter data</button>
                </div>
            </div>
        </Layout>
    )
}