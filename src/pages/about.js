import React, { useEffect } from "react"
import * as d3 from "d3"
import cloud from "d3-cloud"
import Layout from "../components/layout"
import SEO from "../components/seo"
import skillsData from "../data/skill_set.json"
import adjectiveData from "../data/adjectives.json"



//var fill = d3.scale.category20();
var fill = d3.scaleOrdinal(d3.schemeCategory10);

/*var wordCloudData = []
d3.json("../data/skill_set.json", function(data) {
    console.log(data);
    var entry = {}
    entry[text] = data
    wordCloudData.push
});

const wordsData = [
    "Hello", "world", "normally", "you", "want", "more", "words",
    "than", "this"];*/

var {width, height} = [500, 500]
const valMap = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function(d) {return {text: d, size: 10 + Math.random() * 90};});


function drawSkills(words) {
    d3.select("#skillset").append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .append("g")
        .attr("transform", "translate("+250+","+250+")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("border", "1px solid grey")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}

function drawAdjectives(words) {
    d3.select("#adjectives").append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .append("g")
        .attr("transform", "translate("+250+","+250+")")
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


const WordCloudViz = () => {
    useEffect(
        () => {
            cloud().size([500, 500])
                /*.words([
                    "Hello", "world", "normally", "you", "want", "more", "words",
                    "than", "this"].map(function(d) {
                    return {text: d, size: 10 + Math.random() * 90};
                }))*/
                .words(skillsData)
                .padding(1)
                //.rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font("Impact")
                //.fontSize(function(d) { return d.size; })
                .fontSize(function(d) { return 40 })
                .on("end", drawSkills)
                .start();

            cloud().size([500, 500])
                /*.words([
                    "Hello", "world", "normally", "you", "want", "more", "words",
                    "than", "this"].map(function(d) {
                    return {text: d, size: 10 + Math.random() * 90};
                }))*/
                .words(adjectiveData)
                .padding(1)
                //.rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font("Impact")
                //.fontSize(function(d) { return d.size; })
                .fontSize(function(d) { return 40 })
                .on("end", drawAdjectives)
                .start();

            console.log(valMap)

        },
        //() => draw(wordsData),
        []
    )

    return (
        <Layout navLocation="wordcloud">
            <SEO title="Words Cloud Viz" />
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                {/*<div id='adjectives'></div>*/}
                <div id='skillset' style={{"border": "1px solid grey"}}></div>
            </div>

        </Layout>
    )
}

export default WordCloudViz