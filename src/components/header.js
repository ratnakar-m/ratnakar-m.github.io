import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, color: `white`,
        textDecoration: `none`,
        fontSize:`60%`,
        padding:`10px` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
        background: `MidnightBlue`,
        marginBottom: `1.45rem`,
        opacity:0.9,
        height:`3rem`
    }}
  >
    <div
      style={{
        //margin: `1 auto`,
        //maxWidth: 960,
        //padding: `0.25rem 0.4rem`,
      }}
    >
      <h1 style={{ margin: 0
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
              fontSize:`60%`,
              padding:`10px`
          }}
        >
          {siteTitle}
        </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
              <ListLink to="/blogs/">Blogs</ListLink>
          </ul>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
