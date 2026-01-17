import { ArrowLeft, Minus, Plus, Star, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === Number(id));
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            navigate('/cart');
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen pt-40 px-6 text-center">
                <h2 className="text-3xl font-serif mb-4">Product Not Found</h2>
                <Link to="/shop" className="text-olive underline">Return to Shop</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
            <Link to="/shop" className="inline-flex items-center gap-2 text-muted hover:text-olive transition-colors text-sm font-medium mb-8">
                <ArrowLeft size={16} /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Gallery */}
                <div
                    className="aspect-[4/5] rounded-2xl relative overflow-hidden"
                    style={{ backgroundColor: product.color }}
                >
                    {/* Placeholder for actual product image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-2xl text-stone-text/20 italic">{product.name}</span>
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        {product.isNew && <span className="inline-block bg-olive/10 text-olive text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">New Arrival</span>}
                        <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl font-medium text-olive">{product.price}</span>
                            <div className="flex items-center text-yellow-500 text-sm">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                <span className="text-muted ml-2 text-xs">(24 Reviews)</span>
                            </div>
                        </div>
                        <p className="text-muted text-lg leading-relaxed font-light">{product.description}</p>
                    </div>

                    <div className="py-8 border-t border-b border-stone-200/50 space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="font-medium">Quantity</span>
                            <div className="flex items-center border border-stone-200 rounded-full">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 hover:text-olive transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 hover:text-olive transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={handleAddToCart} className="flex-1 bg-stone-text text-white py-4 rounded-full font-bold uppercase tracking-wider hover:bg-olive transition-colors shadow-lg shadow-stone-text/20">
                            Add to Cart
                        </button>
                        <button className="p-4 border border-stone-200 rounded-full hover:border-olive hover:text-olive transition-colors">
                            <Heart size={24} />
                        </button>
                    </div>

                    <div className="text-sm text-muted space-y-2">
                        <div className="flex gap-2">
                            <span className="font-bold text-stone-text w-24">Category:</span>
                            <span>{product.category}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-bold text-stone-text w-24">Shipping:</span>
                            <span>Free shipping on orders over $50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
