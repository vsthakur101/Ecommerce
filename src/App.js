import HomePage from './container/HomePage'
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartPage from '../src/components/Cart/CartPage'

import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
      <div className="App">
      <Switch>
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/details/:name" render={() => <ProductDetails />}/>
      <Route exact path="/cart" render={() => <CartPage />} />
      </Switch>
      </div>
  );
}

export default App;
