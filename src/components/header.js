import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Avatar } from "@primer/components"
import headerStyles from "./header.module.css"
import { graphql, useStaticQuery } from 'gatsby'
import Button from "./button";

function handleItemClick(e){
    alert(e.target.key)
}

const MenuItem = ({ text, url, focus }) => {


    return (
        <div>
            <li className={focus?headerStyles.menuItemFocus:headerStyles.menuItem}>
                <Link to={url}>
                    <p>{text}</p>
                </Link>
            </li>
        </div>
    )
}

{/*<div style={{display: 'flex', 'flex-direction': 'row'}}>*/}
{/*    <div className={headerStyles.headStrip}>*/}
{/*<Avatar src={avatarUrl} alt='user-avatar' className='circle' mb={3}  size={40} padding={2}></Avatar>*/}
{/* <img style={{
            'border-radius': `50%`,
            margin: `5px 5px 5px 5px`
            }} className="circle" alt="user-avatar" src={avatarUrl} width="40" height="40"/>*/}

const MenuBar = ({ avatarUrl, location }) => (
    <div style={{'display': 'flex', 'flexDirection': 'row'}}>
        <img className={headerStyles.avatarRounded} alt="user-avatar" src={avatarUrl} width="35" height="35"/>
        <div style={{'justifyContent': 'flexEnd'}}>
            <nav className={headerStyles.menuBar}>
                <ul>
                    <MenuItem text='Home' url='/' focus={location === 'home'}/>
                    <MenuItem text='About' url='/about' focus={location === 'about'}/>
                    <MenuItem text='Blogs' url='/blogs' focus={location === 'blogs'}/>
                    {/*-MenuItem text='Contact' url='/contact' focus={location === 'contact'}*/}
                    <MenuItem text='Projects' url='/projects' focus={location === 'projects'}/>
                </ul>
            </nav>
        </div>
    </div>
)

function Header({ siteTitle, navLocation }) {
    const {github: {viewer: user},} = useStaticQuery(graphql`
                              query {
                                github {
                                  viewer {
                                    email
                                    avatarUrl
                                    name
                                  }
                                }
                              }`)
    const {
        email,
        avatarUrl,
        name,
    } = user

    return (
        <header className={headerStyles.header}>
            <MenuBar avatarUrl={avatarUrl} location={navLocation}/>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
    navLocation: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
    navLocation: ``,
}

MenuItem.propTypes = {
    focus: PropTypes.bool,
}

MenuItem.defaultProps = {
    focus: false,
}

export default Header
