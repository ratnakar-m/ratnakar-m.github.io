import React, {useEffect, useRef, useState} from "react"
import * as d3 from "d3"
import cloud from "d3-cloud"
import skillsData from "../../data/skill_set.json"
import adjectiveData from "../../data/adjectives.json"



//var fill = d3.scale.category20();
var fill = d3.scaleOrdinal(d3.schemeCategory10);

const valMap = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function(d) {return {text: d, size: 10 + Math.random() * 90};});



function WordCloud()  {

    var maxSize = d3.max(skillsData, function(d) { return d.size; });
    var minSize = d3.min(skillsData, function(d) { return d.size; });

    const svgRef = useRef();






    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(500);

    function draw(words) {
        d3.select("#skillset1").select("svg")
            .attr("width", 300)
            .attr("height", 500)
            .append("g")
            .attr("transform", "translate(150,250)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }

    useEffect(
        () => {




// min/max word size
            maxSize = d3.max(skillsData, function(d) { return d.size; });
            minSize = d3.min(skillsData, function(d) { return d.size; });

            var fontScale = d3.scaleLinear() // scale algo which is used to map the domain to the range
                .domain([minSize, maxSize]) //set domain which will be mapped to the range values
                .range([25,35]); // set min/max font size (so no matter what the size of the highest word it will be set to 40 in this case)


            cloud().size([300, 500])
                .words(skillsData)
                .padding(1)
                //.rotate(function() { return ~~(Math.random() * 2) * 90; })
                .rotate(-20)
                .font("Impact")
                .fontSize(function(d) { return fontScale(d.size) }) // the d3 scale function is used here
                .on("end", draw)
                .start();


        },
        []
    )

    return (

        <div className='container-col' >
            {/*<div id='adjectives'></div>*/}
            <div id='skillset1' style={{"border": "1px solid grey"}}>
                <svg ref={svgRef}>
                </svg>
            </div>
        </div>
    )
}

export default WordCloud