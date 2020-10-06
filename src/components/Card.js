import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
        <h2 className="LineBreak">{props.text}</h2>
    </div>
)

export default Card