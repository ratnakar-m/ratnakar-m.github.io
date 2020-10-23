import React, { useEffect } from "react"
import * as d3 from "d3"
import cloud from "d3-cloud"
import Layout from "../components/layout"
import SEO from "../components/seo"
import skillsData from "../data/skill_set.json"
import adjectiveData from "../data/adjectives.json"


import { render } from "react-dom";
import WordCloud from "react-d3-cloud";

const data = [
    { text: "Microservices", value: 95 },
    { text: "Machine Learning", value: 90 },
    { text: "Distributed Computing", value: 85 },
    { text: "Java", value: 85 },
    { text: "Web Technologies", value: 90 },
    { text: "Data Warehousing", value: 80 },
    { text: "Python", value: 75 },
    { text: "Spring Framework", value: 70 },
    { text: "Kafka", value: 70 },
    { text: "Elastic Search", value: 70 },
    { text: "Spring", value: 70 },
    { text: "Database Systems", value: 85 },
    { text: "Deep Learning", value: 70 },
    { text: "Play Framework", value: 70 },
    { text: "Data Structures", value: 70 },
    { text: "Operating Systems", value: 70 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 36;
const transform = (d) => {
    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
}

const SkillCloud = () => {
    return (<Layout headerText="about">
        <SEO title="About" />
        <div style={{'display': 'flex', 'flexDirection': 'row'}}>
            {/*<div id='adjectives'></div>*/}
            <div id='skillset' style={{"border": "1px solid grey"}}>
                <WordCloud data={data} fontSizeMapper={fontSizeMapper} padding={1}
                           rotate={rotate} font="Impact" transform={transform}
                />


            </div>
        </div>

    </Layout>);
}


export default SkillCloud