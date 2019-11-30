import React from 'react';
import './list-item.css';

const ListItem = ({ index, name, click }) => {
    return (
        <div className="list-item" onClick={() => click(index)}>{name}</div>
    );
}

export default ListItem;