import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Shop() {
    const [filter, setFilter] = useState("All");

    // Get unique categories
    const categories = ["All", ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === "All"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-olive transition-colors text-sm font-medium mb-2">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-serif">All Products</h1>
                        <p className="text-muted max-w-md">Browse our full collection of organic, plant-based treats designed to nourish without compromise.</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-stone-200/50 pb-6">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-olive text-white shadow-md shadow-olive/20'
                                : 'bg-white text-stone-text border border-stone-200 hover:border-olive/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 min-h-[400px]">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center text-muted">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
