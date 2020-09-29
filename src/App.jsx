import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Deck from './components/Deck'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to my SPA</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Deck</Link>
              </li>
              {/* <li>
                <Link to="/1">Page 1</Link>
              </li>
              <li>
                <Link to="/2">Page 2</Link>
              </li> */}
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Deck} />
          {/* <Route exact path="/1">
            Page 1
          </Route>
          <Route exact path="/2">
            Page 2
          </Route> */}
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
