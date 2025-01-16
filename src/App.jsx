import "./App.css";
import ProductList from "./components/ProductList";
import { products } from "./components/Products.js";
import Cart from "./components/Cart.jsx";
import { useCartStore } from "./store/useCartStore.js";

function App() {
	const { clearCart, cart } = useCartStore();
	return (
		<div className="container">
			<h1>Simple add to cart with Zustand</h1>

			<ProductList products={products} />
			{cart.length > 0 && <button onClick={clearCart}>Clear cart</button>}
			<Cart />
		</div>
	);
}

export default App;
