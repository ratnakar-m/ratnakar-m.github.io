
import React from "react";
import {graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Helmet from "react-helmet";
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout";
import config from "../../data/SiteConfig";

import natureIcon from '../../static/nature.png'

export default function About({ data }) {
        return (
            <Layout>
                <Helmet title={`About | ${config.siteTitle}`} />
                <div css={css`max-width: 850px; margin-top: ${rhythm(1.5)}; margin-bottom: ${rhythm(6)}; margin-left: auto; margin-right: auto; display: flex; flex-direction: column;`}>
                    <div css={css`display: flex; flex-direction: row; 
          @media (max-width: 620px) { flex-direction: column;}`}>
                        <div css={css`margin-right: ${rhythm(1.5)}; display: flex; justify-content: center; margin-bottom: ${rhythm(1)};
             @media (max-width: 920px) { margin-right: 0;}`}>
                            <Img fixed={data.profile.childImageSharp.fixed} css={css`margin: auto; max-width: 160px; border-radius: 50%;`}> </Img>
                        </div>
                        <div css={css`padding-left: ${rhythm(1)}; border-left: 1px solid var(--hr);
            @media (max-width: 920px) {margin-left: ${rhythm(1.5)}}
            @media (max-width: 530px) {margin-left: 0}`}>
                            <h1 css={css``}> About me </h1>
                            <div>
                <span>
                I'm Ratnakar, a full stack software engineer and a data scientist.
                This website serves as synopsis over the things I have learnt and experienced over the years and it is a glimpse of my various endeavors and explorations.
                </span>
                            </div>
                            <div css={css`padding-top: ${rhythm(0.5)};`}>
                <span>
                On a personal side, I enjoy reading, exploring nature. I live in Hyderabad, in Southern part of India.
                </span>
                            </div>
                        </div>
                    </div>
                    <div css={css`margin-top: ${rhythm(2)};
          display: flex; flex-direction: row; 
          @media (max-width: 620px) { max-width: 920px; margin-right: ${rhythm(1)}; flex-direction: column-reverse; justify-content: flex-end; margin-top: 1rem;}
          @media (max-width: 530px) { max-width: 920px; margin-right: 0; padding-right: 0;}`}>
                        <div css={css`border-right: 1px solid var(--hr); padding-right: ${rhythm(1)};`}>
                            <h1> Career Quests </h1>
                            <span>
                Throughout my career and academics, I have learnt different aspects of software design, frameworks, cloud solutions and data-intensive applications.
                Here's a list of some of them.
                <ul css={css`padding-top: 1rem;`}>
                  <li><strong>Software Design</strong> - Practices, Patterns, Processes and Philosophy</li>
                    <li><strong>Cloud Solutions</strong> - SaaS, PaaS, IaaS, Docker, CI/CD </li>
                    <li><strong>Data Science and Analytics</strong> - Statistics, Machine Learning, Deep Learning </li>
                    <li><strong>Domains</strong> - e-Commerce, Supply Chain, PLM, HCM  </li>
                    <li><strong>Tech Stack</strong> - <i>to-fill</i></li>

                </ul>
            </span>
                        </div>
                        <div css={css`display: flex; justify-content: flex-end; margin-left: ${rhythm(1.5)}; margin-bottom: ${rhythm(1)};
             @media (max-width: 620px) {  margin: 0; margin-left: auto; margin-right: auto; margin-bottom: 1rem; padding-left: ${rhythm(1)};}
             @media (max-width: 530px) { padding-left: 0;}`}>
                            <img src={natureIcon} alt="tea" css={css`width: 160px; height: 160px; margin: auto; auto; max-width: 160px;`}/>
                        </div>
                    </div>
                    <div css={css`margin-top: ${rhythm(2)};
            display: flex; flex-direction: row; 
            @media (max-width: 620px) { max-width: 920px; margin-right: ${rhythm(1)}; flex-direction: column; justify-content: flex-end;}
            @media (max-width: 530px) { max-width: 920px; margin-right: 0; padding-right: 0;}`}>
                        <div css={css`display: flex; justify-content: flex-end; margin-left: ${rhythm(1.5)}; margin-bottom: ${rhythm(1)};
             @media (max-width: 620px) { margin: 0; margin-left: auto; margin-right: auto; padding-left: ${rhythm(1)}; padding-top: ${rhythm(1.5)};}`}>
                            <Img fixed={data.cat.childImageSharp.fixed} css={css`margin: auto; max-width: 160px; border-radius: 50%; margin-right: 0;`}> </Img>
                        </div>
                        <div css={css`border-right: 1px solid var(--hr); padding-right: ${rhythm(1)};`}>
                            <h1 id="contact"> Contact </h1>
                            <span>

                <ul css={css`padding-top: 1rem;`}>
                    <li><strong>Email:</strong> <a href="mailto:ratnakar.mallayagari@gmail.com"> ratnakar.mallayagari@gmail.com </a> </li>
                    <li><strong>Github:</strong> <a href="https://github.com/ratnakar-m"> ratnakar-m </a> </li>
                <li><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/ratnakar-mallayagari/"> Ratnakar Mallayagari </a> </li>
                </ul>
                </span>
                        </div>

                    </div>
                </div>
            </Layout>
        );
}

export const pageQuery = graphql`
query ImageQuery {
  profile: file(relativePath: { eq: "profile.png" }) {
    childImageSharp {
      fixed(width: 160, height: 160, quality:100) {
        ...GatsbyImageSharpFixed
          }
      }
    }
  profile2: file(relativePath: { eq: "profile.png" }) {
    childImageSharp {
      fixed(width: 160, height: 160, quality:90) {
        ...GatsbyImageSharpFixed
          }
      }
    }
  cat: file(relativePath: { eq: "contact_me.jpg" }) {
    childImageSharp {
      fixed(width: 160, height: 160, quality:90) {
        ...GatsbyImageSharpFixed
          }
      }
    }
  }
`;
