import React from 'react';
import ListPanel from "../list-panel/list-panel"
import './list-form.css';

const ListForm = ({
    listItems,
    listName,
    listItemName,
    itemNameHdl,
    listNameHdl,
    addItemClk,
    deleteItemClk,
    addToListsClk }) => {
    return (
        <div>
            <div className="list-form-section">
                <div className="form-row">
                    <label>List Name:</label><input onChange={listNameHdl} value={listName}/>
                </div>
                <div className="form-row top-margin">
                    <label>New Item:</label><input onChange={itemNameHdl} value={listItemName}/><button onClick={addItemClk}>Add Item</button>
                </div>
            </div>
            <ListPanel list={listItems} addToListsClk={addToListsClk} deleteHandler={deleteItemClk} />
        </div>
    );
}

export default ListForm;