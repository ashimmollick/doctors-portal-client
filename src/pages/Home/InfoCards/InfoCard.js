import React from 'react';

const InfoCard = ({ card }) => {
    const { icon, name, desctiption, bgClass } = card;
    return (
        <div className={`p-6 card md:card-side shadow-xl text-white ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desctiption}</p>

            </div>
        </div>
    );
};

export default InfoCard;