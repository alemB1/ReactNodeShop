import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import "./index.css"
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
          <div>
              <Link className='brand' href="/">Amazona</Link>
          </div>
          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign in</a>
          </div>
      </header>        
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact></Route>
          <Route path='/product/:slug' element={<ProductScreen/>}></Route>
        </Routes>
      </main>
      <footer className="row center">
          All right reserved            
      </footer>
    </div>
  </BrowserRouter>
    );
}

export default App;
