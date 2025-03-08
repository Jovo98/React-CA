import { useCart } from "../store";

export function CheckoutPage() {
    const { cart, addToCart, removeFromCart } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + (item.discountedPrice || item.price) * item.quantity,
        0
    );

    function completePurchase() {
        alert("Thank you for your purchase!");
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between border-b py-2 items-center">
                            <img
                                src={item.image.url}
                                alt={item.image.alt}
                                className="h-64"
                            />
                            <p className="font-semibold">{item.title}</p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    -
                                </button>
                                <p>({item.quantity})</p>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                >
                                    +
                                </button>
                                <p>${((item.discountedPrice || item.price) * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
                    <button
                        onClick={completePurchase}
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Complete Purchase
                    </button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}
