import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const filteredProducts = query.trim()
        ? products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setQuery('');
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="min-h-screen px-6 py-20">
                <div className="max-w-2xl mx-auto bg-creme rounded-2xl shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center gap-4 p-6 border-b border-stone-200">
                        <Search className="text-muted" size={24} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                            className="flex-1 bg-transparent outline-none text-lg placeholder:text-muted"
                        />
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-[60vh] overflow-y-auto">
                        {query.trim() === '' ? (
                            <div className="p-12 text-center text-muted">
                                <p>Start typing to search products...</p>
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="p-12 text-center text-muted">
                                <p>No products found for "{query}"</p>
                            </div>
                        ) : (
                            <div className="p-4">
                                <p className="text-sm text-muted mb-4 px-2">
                                    {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
                                </p>
                                <div className="space-y-2">
                                    {filteredProducts.map((product) => (
                                        <button
                                            key={product.id}
                                            onClick={() => handleProductClick(product.id)}
                                            className="w-full flex items-center gap-4 p-4 hover:bg-stone-100 rounded-lg transition-colors text-left"
                                        >
                                            <div
                                                className="w-16 h-16 rounded-lg flex-shrink-0"
                                                style={{ backgroundColor: product.color }}
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                                                <p className="text-sm text-muted line-clamp-1">{product.description}</p>
                                            </div>
                                            <span className="font-medium text-olive">{product.price}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
