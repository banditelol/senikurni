import React from 'react';

const Card = ({title, alt, image, link}) => (
    <div className="porto-card">
        <a href={link}><img src={image} alt={alt}/></a>
    </div>
)

export default Card;