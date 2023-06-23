import "./App.css";
import ListCart from "./Layout/ListCart";
import ListProduct from "./Layout/ListProduct";
// import Counter from './Layout/Counter';
// import ProductForm from './Layout/ProductForm';
// import ProductList from './Layout/ProductList';

function App() {
  return (
    <div className="container">
      {/* <Counter /> */}
      {/* <ProductForm />
      <ProductList /> */}
      <div className="page-header">
        <h1>
          MiniProject - Shopping Cart <small>ReactJS</small>
        </h1>
      </div>

      <div className="row">
        <ListProduct />
        <ListCart />
      </div>
    </div>
  );
}

export default App;
