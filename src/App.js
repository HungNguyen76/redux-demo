import './App.css';
// import Counter from './Layout/Counter';
import ProductForm from './Layout/ProductForm';
import ProductList from './Layout/ProductList';

function App() {
  return (
    <div className="App" style={{padding: 20}}>
      {/* <Counter /> */}
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
