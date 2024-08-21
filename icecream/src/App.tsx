import Header from './Header'
import AdDesigner from './AdDesigner'
import Votes from './Votes'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  )
}

export default App;