import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Nav from "../src/components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import Detail from "./pages/Detail";
import Account from "./pages/Account";
import Search from "./pages/Search";
import ScrollToTop from "./utils/scrollToTop";
import { useSelector } from "react-redux";
import ShowAll from "./pages/ShowAll";

function App() {
  const { productDetail } = useSelector((state) => state.productDetail);
  const { showAllProduct } = useSelector(state => state.showAllProduct)

  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/not-found' element={<NotFound />} />
        <Route path={"/detail/" + productDetail.id} element={<Detail />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/all-products' exact element={<AllProducts />} />
        <Route path='/categories' element={<Categories />} />
        <Route path={'/categories/' + showAllProduct.title} element={<ShowAll />} />
        <Route path='/account' element={<Account />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search />} />
        <Route path='/*' element={<Navigate to='/not-found' />} />
      </Routes>
    </Router>
  );
}

export default App;
