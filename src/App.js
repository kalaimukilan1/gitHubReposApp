import {BrowerRouter, Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Counter from './components/Counter'

import Home from './components/Home'
import './App.css'

// const App = () => <Home />

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default App
