
import type { Product } from '../data/products';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div
                className="aspect-[3/4] rounded-2xl mb-6 relative overflow-hidden transition-all duration-500 group-hover:shadow-xl"
                style={{ backgroundColor: product.color }}
            >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && <span className="bg-white/80 backdrop-blur-sm text-olive text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>}
                    {product.isBestSeller && <span className="bg-olive/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Seller</span>}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white text-stone-text px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg hover:bg-olive hover:text-white transition-colors">
                        Quick Add
                    </button>
                </div>
            </div>

            <div className="space-y-1">
                <h3 className="font-serif text-lg group-hover:text-olive transition-colors">{product.name}</h3>
                <p className="text-muted font-light">{product.price}</p>
            </div>
        </div>
    );
}
