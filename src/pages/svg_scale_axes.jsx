import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'
import SEO from "../components/seo";
import Layout from "../components/layout";
import "../styles/learn.css"

function ScaleAndAxes(){

    const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
    const svgRef = useRef();


    useEffect(() => {
        const svg = d3.select(svgRef.current);

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 300]);

        const yScale = d3.scaleLinear()
            .domain([0, 150])
            .range([150, 0]);

        const xAxis = d3.axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1);
        svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

        const yAxis = d3.axisRight(yScale);
        svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

        const myLine = d3.line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(d3.curveCardinal);

        svg
            .selectAll(".line")
            .data([data])
            .join("path")
            .attr("class","line" )
            .attr("d", value => myLine(value))
            .attr("fill", "none")
            .attr("stroke", "blue");

    }, [data])

    return(
        <Layout headerText="SVG Scale and Axes">
            <SEO title="SVG Scale and Axes" />
            <div>
                <svg ref={svgRef}>
                    <g className="x-axis" />
                    <g className="y-axis" />
                </svg>
                <br/>
                <br/>
                <br/>
                <button onClick={() => setData(data.map(value => value + 5))}>Update data</button>
                <button onClick={() => setData(data.filter(value => value < 35))}>Filter data</button>
            </div>
        </Layout>
    )

}

export default ScaleAndAxes;