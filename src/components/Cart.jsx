import { useCartStore } from "../store/useCartStore.js";

export default function Cart() {
	const { removeFromCart, cart } = useCartStore();
	return (
		<div>
			<h1>Cart</h1>
			{cart?.map((product) => (
				<div key={product.id} className="CardContainer">
					<div>
						<h3>{product.name}</h3>
						<p>{product.description}</p>
						<p>
							Quantity :{" "}
							<span className="quantity">{product.quantity}</span>{" "}
						</p>
					</div>
					<div>
						<button onClick={() => removeFromCart(product.id)}>
							Remove
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
