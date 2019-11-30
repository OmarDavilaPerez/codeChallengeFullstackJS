import React from 'react';
import ListsItem from '../lists-item/lists-item'
import './lists-panel.css';

const ListsPanel = ({ lists }) => {
    const listsItems = lists.map((item, index) => (<ListsItem key={index} name={item.listName} id={item.id} />));

    return (
        <div>
            <div className="panel-section">
                {listsItems}
            </div>
        </div>
    );
}

export default ListsPanel;