import React,  { Component, useEffect } from "react"
import * as d3 from "d3"
import cloud from "d3-cloud"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactWordcloud from 'react-wordcloud';
import styles from "../styles/about.css";
import { Resizable } from "re-resizable";
import headerStyles from "../components/header.module.css";

//import 'tippy.js/dist/tippy.css';
//import 'tippy.js/animations/scale.css';

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
    { text: "Play Framework", value: 65 },
    { text: "Data Structures", value: 80 },
    { text: "Operating Systems", value: 85 },
    { text: "Text Processing", value: 75 },
    { text: "Mongo DB", value: 75 },
];

const callbacks = {
    //getWordColor: word => word.value > 50 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 70 ? "good" : "bad"}]`,
    //fontSize: {fontSize}
}

const fontSize = (d) => {
    return 40
}
const options = {
    //rotations: 40,
    //rotationAngles: [-90, 0],
    font: 'Impact',
    fontWeight: 'bold',
    fontSizes: [25,32],
    transitionDuration: 0,
};



const size=[600, 400]
const skillcloud = () =>  {


        return (
            <Layout headerText="about">
                <SEO title="About" />
                <div id="skillsetWrapper" style={{'display': 'flex', 'flexDirection': 'row'}} className="skillWrapper">
                    {/*<div id='adjectives'></div>*/}
                    <div id='skillset' style={{"border": "1px solid grey", width: "100%", height: "100%" }}>
                        <ReactWordcloud words={data} callbacks={callbacks}
                                        options={options}
                                        size={[600, 400]}
                        />
                    </div>
                </div>
            </Layout>

        );
}




export default skillcloud