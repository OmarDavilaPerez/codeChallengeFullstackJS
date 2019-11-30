import React from 'react';
import './lists-item.css';

const ListsItem = ({ name, id }) => {
const children = null;

    return (
        <div className="lists-item" name={id}>{name}</div>
    );
}

export default ListsItem;