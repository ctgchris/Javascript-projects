import React from 'react';
import'./FavThing.css';

const FavThing = (props) => (
    <div className="favThings">
        {props.items.map((itemObject => (
          <div className = "thing">
            <h4>{itemObject.name}</h4>
            <img src={itemObject.link} alt={itemObject.name} />
        </div>
        )))}
    </div>
);

export default FavThing;