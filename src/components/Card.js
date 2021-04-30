import React from 'react'
import './CSS/Style.css';


const Card = ({title}) => {
    return (
        <div className="Card mt-5">
            <p>{title}</p>
        </div>
    )
}

export default Card
