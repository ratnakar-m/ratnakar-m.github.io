import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Button from '../components/button';
import styles from '../styles/projects.css'
import {css} from "@emotion/core";



const ProjectsPage = ({ data }) => (
        <Layout>
            <SEO
                title="Projects"
                keywords={[`gatsby`, `application`, `react`, `projects`]}
            />
            <h1>Projects</h1>
            <div className="project-list">
                    {data.allProjectsJson.edges.map(project => (
                        <div key={project.node.id} className="item" >

                            <div className="content">
                                    <h2>{project.node.title}</h2>
                                    <div className="excerpt">
                                            {project.node.description}
                                    </div>
                                    <a href={project.node.url}>
                                            <Button buttonText="Visit the Website" />
                                    </a>
                            </div>
                            <div className="thumbnail">


                                <Img fluid={project.node.thumbnailImage.childImageSharp.fluid} />
                                {/*<Img fixed={data.proj2.childImageSharp.fixed} css={css`margin: auto; max-width: 160px; border-radius: 50%; margin-right: 0;`}> </Img>*/}

                            </div>
                        </div>
                    ))}
            </div>
    </Layout>
);

export default ProjectsPage;

export const projectsQuery = graphql`
  query {
    allProjectsJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date
          description
          url
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    }
`;



