import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
    const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <Link to="/shop" className="inline-flex items-center gap-2 text-muted hover:text-olive transition-colors text-sm font-medium mb-8">
                        <ArrowLeft size={16} /> Continue Shopping
                    </Link>

                    <div className="text-center py-20">
                        <h1 className="text-4xl font-serif mb-4">Your Cart is Empty</h1>
                        <p className="text-muted mb-8">Add some nourishing treats to get started.</p>
                        <Link
                            to="/shop"
                            className="inline-block bg-olive text-white px-8 py-3 rounded-full font-medium hover:bg-olive/90 transition-colors"
                        >
                            Browse Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <Link to="/shop" className="inline-flex items-center gap-2 text-muted hover:text-olive transition-colors text-sm font-medium mb-4">
                            <ArrowLeft size={16} /> Continue Shopping
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-serif">Shopping Cart</h1>
                    </div>

                    {items.length > 0 && (
                        <button
                            onClick={clearCart}
                            className="text-sm text-muted hover:text-olive transition-colors"
                        >
                            Clear Cart
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {items.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm border border-stone-100">
                                <div className="flex gap-6">
                                    {/* Product Image */}
                                    <div
                                        className="w-24 h-24 rounded-lg flex-shrink-0"
                                        style={{ backgroundColor: item.color }}
                                    />

                                    {/* Product Info */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <Link to={`/product/${item.id}`} className="font-serif text-lg hover:text-olive transition-colors">
                                                    {item.name}
                                                </Link>
                                                <p className="text-sm text-muted">{item.category}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-muted hover:text-olive transition-colors p-1"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center border border-stone-200 rounded-full">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:text-olive transition-colors"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="w-12 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:text-olive transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="font-medium text-lg">{item.price}</p>
                                                {item.quantity > 1 && (
                                                    <p className="text-sm text-muted">
                                                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)} total
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-creme-dark rounded-lg p-6 sticky top-32">
                            <h2 className="text-xl font-serif mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted">Subtotal</span>
                                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted">Shipping</span>
                                    <span className="font-medium">Free</span>
                                </div>
                                <div className="border-t border-stone-200 pt-4">
                                    <div className="flex justify-between">
                                        <span className="font-serif text-lg">Total</span>
                                        <span className="font-serif text-2xl text-olive">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-olive text-white py-4 rounded-full font-medium hover:bg-olive/90 transition-colors mb-3">
                                Proceed to Checkout
                            </button>

                            <p className="text-xs text-center text-muted">
                                Free shipping on all orders over $50
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
