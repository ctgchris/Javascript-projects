import React from 'react';
import './ListItems.css';

const ListItems = (props) => (
    <div id = "hobbies">
        <h1>{props.title}</h1>
        <div className="hobbyItems">
            {props.items.map((itemObject => (
            <li>{itemObject.info}</li>
        )))}
    </div>
    </div>
    
);

export default ListItems;