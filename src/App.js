import React from 'react'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import rootReducer from './services/redux'

import Layout from './hocs/Layout'
import ListsScene from './scenes/ListsScene'
import './App.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <ListsScene />
            </Layout>
        </Provider>
    )
}

export default App