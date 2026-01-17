import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

export function NavbarSearch() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredProducts = query.trim()
        ? products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5) // Limit to 5 results
        : [];

    const showResults = query.trim() !== '';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setQuery('');
            }
        };

        if (showResults) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showResults]);

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`);
        setQuery('');
    };

    const handleClear = () => {
        setQuery('');
        inputRef.current?.focus();
    };

    return (
        <>
            {/* Backdrop - only darkens content below navbar */}
            {showResults && filteredProducts.length > 0 && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                    style={{ top: '80px' }} // Start below navbar
                    onClick={() => setQuery('')}
                />
            )}

            {/* Search Container */}
            <div ref={containerRef} className="relative hidden sm:block">
                {/* Search Input - Always Visible */}
                <div className="flex items-center gap-2 border-b-2 border-stone-200 focus-within:border-olive transition-colors w-48 md:w-64">
                    <Search size={18} className="text-muted flex-shrink-0" strokeWidth={1.5} />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search products..."
                        className="flex-1 bg-transparent outline-none py-2 text-sm placeholder:text-muted"
                    />
                    {query && (
                        <button
                            onClick={handleClear}
                            className="p-1 hover:bg-stone-100 rounded-full transition-colors flex-shrink-0"
                        >
                            <X size={16} className="text-muted" />
                        </button>
                    )}
                </div>

                {/* Dropdown Results */}
                {showResults && (
                    <div className={`absolute top-full right-0 mt-4 w-80 md:w-96 bg-white rounded-lg shadow-2xl border border-stone-200 overflow-hidden z-50 transition-all duration-300 ${filteredProducts.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}>
                        {filteredProducts.length === 0 ? (
                            <div className="p-6 text-center text-muted text-sm">
                                No products found for "{query}"
                            </div>
                        ) : (
                            <>
                                <div className="p-3 border-b border-stone-100 bg-creme-dark">
                                    <p className="text-xs text-muted uppercase tracking-wider">
                                        {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
                                    </p>
                                </div>
                                <div className="max-h-[400px] overflow-y-auto">
                                    {filteredProducts.map((product) => (
                                        <button
                                            key={product.id}
                                            onClick={() => handleProductClick(product.id)}
                                            className="w-full flex items-center gap-4 p-4 hover:bg-creme-dark transition-colors text-left border-b border-stone-100 last:border-b-0"
                                        >
                                            <div
                                                className="w-14 h-14 rounded-lg flex-shrink-0"
                                                style={{ backgroundColor: product.color }}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-serif text-base mb-1 truncate">{product.name}</h3>
                                                <p className="text-xs text-muted line-clamp-1">{product.description}</p>
                                            </div>
                                            <span className="font-medium text-olive text-sm flex-shrink-0">{product.price}</span>
                                        </button>
                                    ))}
                                </div>
                                {filteredProducts.length === 5 && (
                                    <div className="p-3 bg-creme-dark border-t border-stone-100">
                                        <button
                                            onClick={() => {
                                                navigate('/shop');
                                                setQuery('');
                                            }}
                                            className="text-xs text-olive hover:underline font-medium"
                                        >
                                            View all results in shop →
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
