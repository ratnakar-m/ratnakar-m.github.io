import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'

function Line(){
    const [data, setData] = useState([25, 30, 45, 60, 20, 15, 75]);
    const svgRef = useRef();

    function draw(){
        const svg = d3.select(svgRef.current);
        const myLine =
                d3.line()
                    .x( (value, index) => index*50 )
                    .y( value  => 150 - value )
                    .curve(d3.curveCardinal)
        svg
            .selectAll("path")
            .data([data])
            .join("path")
            .attr("d", value => myLine(value))
            .attr("fill", "none")
            .attr("stroke", "blue")
    }
    useEffect(draw, data);

    return(
            <div className='container-col' >
                <svg ref={svgRef}></svg>
                <br/>
                <div>
                    <button onClick={() => setData(data.map(value => value + 5))}>Update Data</button>
                    <button onClick={() => setData(data.filter(value => value < 35))}>Filter Data</button>
                </div>
            </div>
    )
}

export default Line