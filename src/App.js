import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About'
import Article from './pages/Article';
import NavBar from './NavBar';
import ArticleList from './pages/Article-list';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <Router>
       <div className="App">
       <NavBar/>
       <div id="page-body">
         <Switch>
         <Route path="/" component={HomePage} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/article-List" component={ArticleList}></Route>
        <Route path="/article/:name" component={Article}></Route>
        <Route component={PageNotFound}/>
        </Switch>
        </div>
    </div>
    </Router>
   
  );
}


export default App;
