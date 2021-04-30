import React from 'react'
import './CSS/Style.css';
import container from 'react-bootstrap';

const Card = ({title}) => {
    return (
        <div className="Card mt-5">
            <p>{title}</p>
        </div>
    )
}

export default Card
