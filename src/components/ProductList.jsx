import { useCartStore } from "../store/useCartStore.js";

/* eslint-disable react/prop-types */
export default function ProductList({ products }) {
	const { addToCart } = useCartStore();
	return (
		<div className="CardContainer">
			{products?.map((product) => (
				<div key={product.id} className="card">
					<h3>{product.id}</h3>
					<h2>{product.name}</h2>
					<p>{product.description}</p>
					<div>
						<button onClick={() => addToCart(product)}>
							Add to cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
