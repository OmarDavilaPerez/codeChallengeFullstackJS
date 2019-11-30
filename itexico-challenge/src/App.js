import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Home from './components/home/home'
import NewList from './components/new-list/new-list'
import EditLists from './components/edit-lists/edit-lists'
import logo from './logo.svg';
import './App.css';

function App() {
  const { useState } = React;
  const [lists, setLists] = useState(
    [
      {
        id: "1",
        listName: "computadoras",
        listItems:[
          "toshiba",
          "vaio",
          "hp",
          "lenovo",
          "mac"
        ]
      },
      {
        id: "2",
        listName: "carros",
        listItems: [
          "mazda",
          "honda",
          "chevrolet",
          "ford",
          "kia",
          "bmw"
        ]
      }
    ]);
  const [listItems, setListItems] = useState([]);
  const [listName, setListName] = useState('');
  const [listItemName, setListItemName] = useState('');

  const onChangeItemNameHandler = e => {
    setListItemName(e.target.value);
  }

  const onChangeListNameHandler = e => {
      setListName(e.target.value);
  }

  const onClickAddItemHandler = e => {
      setListItems([...listItems, listItemName]);
      setListItemName("");
  }

  const onClickDeleteListItemHandler = (index) => {
      listItems.splice(index,1);
      setListItems([...listItems]);
  }

  const onClickAddToLists = (list) => {
    const listObject = {
      "id": Math.random(),
      "listName": listName,
      "listItems": [...listItems]
    }
    setLists([...lists, listObject]);
    setListItemName("");
    setListName("");
    setListItems([]);
  }

  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-nav-list">
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-list">New List</NavLink>
            </li>
            <li>
              <NavLink to="/lists">Edit Lists</NavLink>
            </li>
          </ul>
        </header>
        <section className="pages-content">
          <Route exact path="/" component={Home} />
          <Route
            path="/new-list"
            render={props => (<NewList {...props} listItems={listItems} listName={listName} listItemName={listItemName} itemNameHdl={onChangeItemNameHandler} listNameHdl={onChangeListNameHandler} addItemClk={onClickAddItemHandler} deleteItemClk={onClickDeleteListItemHandler} addToListsClk={onClickAddToLists}/>)}
          />
          <Route path="/lists" render={props => (<EditLists {...props} lists={lists} />)}/>
        </section>
      </div>
    </HashRouter>
  );
}

export default App;
