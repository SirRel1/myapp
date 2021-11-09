import React from "react";

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/HQL.png${props.monster.id}?set=set2&size=150x150`} />
        <h2>
             I'm {props.monster.name}
        </h2>
        <p> <b>Email: </b>{props.monster.email}</p>
    </div>
);