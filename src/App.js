import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ListPage from './pages/ListaPage'
import Card from './components/Card'

const App = () => {


  return (
    <React.Fragment>
      <Router>
        <Route path="/card" component={Card} />
      </Router>
      <ListPage />
    </React.Fragment>
  )
}

export default App;