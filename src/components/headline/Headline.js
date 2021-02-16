import React from 'react'
import "./Headline.scss"

const Headline = ({title, description}) => {
    return (
        <div className="headline">
            <h1 className="headline__title">{title}</h1>
            <p className="headline__description">{description}</p>
        </div>
    )
}

export default Headline
