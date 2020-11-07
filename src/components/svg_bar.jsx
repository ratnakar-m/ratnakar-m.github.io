import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'
import SEO from "../components/seo";
import Layout from "../components/layout";
import "../styles/svg_bar.css"

export default function Bar(){

    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
    const svgRef = useRef();

    useEffect(() => {

        const svg = d3.select(svgRef.current);

        const xScale = d3.scaleBand()
            .domain(data.map((value, index) => index))
            .range([0, 300])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, 150])
            .range([150, 0]);

        const colorScale = d3.scaleLinear()
            .domain([75, 100, 150])
            .range(["green", "orange", "red"])
            .clamp(true);

        const xAxis = d3.axisBottom(xScale).ticks(data.length);

        svg
            .select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);

        const yAxis = d3.axisRight(yScale);
        svg
            .select(".y-axis")
            .style("transform", "translateX(300px)")
            .call(yAxis);

        svg
            .selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")

            .style("transform", "scale(1, -1)")
            .attr("x", (value, index) => xScale(index))
            .attr("y", -150)
            .attr("width", xScale.bandwidth())
            .transition()
            .attr("fill", colorScale)
            .attr("height", value => 150 - yScale(value));

    }, [data]);

    return(
            <div className='barWrapper'>
                <svg ref={svgRef}>
                    <g className="x-axis" />
                    <g className="y-axis" />
                </svg>
                <div >
                    <button onClick={() => setData(data.map(value => value + 5))}>Update data</button>
                    <button onClick={() => setData(data.filter(value => value > 50))}>Filter data</button>
                </div>
            </div>
    )
}