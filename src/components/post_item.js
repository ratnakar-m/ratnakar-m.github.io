import React from "react";
import { Link } from "gatsby";
import "../styles/post.css";
import {css} from "@emotion/core";
import {rhythm} from "../utils/typography";

const Post = ({ title, author, date, description, path }) => (
    <div className="post">
        <h3 className="post-title">
            <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                {title}{" "}
                <span  css={css` color: #bbb;`}>
                — {date}
              </span>
            </h3>
        </h3>
        {/*<p >{ description }</p>
        <p className="post-written-by">
            Written by Ratnakar on { date }
        </p>*/}
        <p>
            <span className="post-description">{description}</span>
            <br/>
            <Link to={ path }>Read more</Link>
        </p>

    </div>
);

export default Post;