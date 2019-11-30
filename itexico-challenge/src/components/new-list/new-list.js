import React from 'react';
import ListForm from '../list-form/list-form'
import './new-list.css';

const NewList = ({ listItems, listName, listItemName, itemNameHdl, listNameHdl, addItemClk, deleteItemClk, addToListsClk }) => {
  return (
    <section className="new-list-section">
        <div className="new-list-form-section">
          <p>Put a name for the list and add all its items by specifying the item in the New Item box and hitting Add Item. If you want to delete an existing item, click over it. When you are done, hit Save.</p>
          <ListForm listItems={listItems} listName={listName} listItemName={listItemName} itemNameHdl={itemNameHdl} listNameHdl={listNameHdl} addItemClk={addItemClk} deleteItemClk={deleteItemClk} addToListsClk={addToListsClk} />
        </div>
    </section>
  );
}

export default NewList;