import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import { Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
