import React from 'react'
const Header=(props)=>(
        <div className="header">
            <div className="container">
                <h1 className="header_title">{props.name}</h1>
                <h2 className="header_subtitle">{props.subtitle}</h2>
            </div>
        </div>
    )
export default Header