import React from 'react';
import ListItem from '../list-item/list-item'
import './list-panel.css';

const ListPanel = ({ list, addToListsClk, deleteHandler }) => {
    const listItems = list.map((item, index) => (<ListItem key={index} index={index} name={item} click={deleteHandler} />));

    return (
        <div>
            <div className="panel-section">
                {listItems}
            </div>
            <div className="buttons-panel">
                <button onClick={() => addToListsClk(list)}>Save</button>
            </div>
        </div>
    );
}

export default ListPanel;