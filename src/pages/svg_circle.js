import React, {useRef, useEffect, useState} from 'react';
import "../styles/learn.css"
import {select} from 'd3';
import SEO from "../components/seo";
import Layout from "../components/layout";

//const data = [25, 30, 20, 45, 60] //to make this dynamic, save it in a state hook
export default function Circle(){
    const [data, setData] = useState([25, 30, 20, 45, 60])
    const svgRef = useRef();
    useEffect(
        () => { //called when dom elements have been rendered or when deps are changed
            console.log(svgRef);
            const svg = select(svgRef.current) //select makes svgRef dom available to d3
            svg.selectAll("circle")
                .data(data) //tell d3 - select all circles in svg  and sync them with data
                .join("circle")
                .attr("r", value => value)
                .attr("cx",  value => value*2)
                .attr("cy",  value => value*2)
                .attr("stroke", "red")
        }, [data]);
    return(
        <Layout headerText="SVG Circle">
            <SEO title="SVG Circle" />
            <div>
                <svg ref={svgRef} id='svg'></svg>
                <br/>
                <button onClick={() => setData(data.map(value => value +5))}>Update Data</button>
                <button onClick={() => setData(data.filter(value => value < 35))}>Filter Data</button>
            </div>
        </Layout>

    )
}

