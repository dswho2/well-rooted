import { ArrowRight, Leaf, Heart, Award } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';

export function Home() {
    const featuredProducts = products.filter(p => p.isFeatured);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-olive/80 mb-2">
                        Plant Based & Organic
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-text leading-[0.9] md:leading-[1.1]">
                        Nourish Your Body <br />
                        <span className="italic text-olive font-light">With Nature</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-lg md:text-xl text-muted leading-relaxed font-light">
                        Handcrafted snacks rooted in the earth. Clean ingredients,
                        conscious sourcing, and <span className="italic">pure goodness</span> in every bite.
                    </p>
                    <div className="pt-8">
                        <Link to="/shop" className="bg-olive text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-olive/90 hover:px-12 transition-all duration-300 shadow-lg shadow-olive/20 group flex items-center gap-2 mx-auto inline-flex">
                            Explore Collection
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values/Benefits */}
            <section className="py-20 bg-creme-dark/50 border-y border-stone-200/30">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: Leaf, title: "100% Organic", desc: "Sourced directly from certified regenerative farms." },
                        { icon: Heart, title: "Mindfully Made", desc: "Small batches crafted with intention and care." },
                        { icon: Award, title: "Pure Quality", desc: "No refined sugars, fillers, or artificial anything." }
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 group cursor-default">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-olive mb-2 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif">{feature.title}</h3>
                            <p className="text-muted leading-relaxed max-w-xs">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section id="shop" className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-xs font-bold tracking-[0.15em] uppercase text-olive mb-2 block">Our Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif">Curated Favorites</h2>
                    </div>
                    <Link to="/shop" className="group flex items-center gap-2 text-sm font-bold tracking-wide uppercase hover:text-olive transition-colors pb-1 border-b border-transparent hover:border-olive">
                        View All Products
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Call to Action / Image Split */}
            <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                <div className="bg-olive/10 flex items-center justify-center p-12 lg:p-20 order-2 md:order-1">
                    <div className="max-w-md space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Join the <span className="italic text-olive">Wellness</span> Community
                        </h2>
                        <p className="text-lg text-muted/80 leading-relaxed">
                            Sign up for our newsletter to receive mindful recipes, wellness tips, and 10% off your first order.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 bg-white/50 border border-stone-200 px-6 py-4 rounded-full placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-olive/50 transition-all font-light"
                            />
                            <button type="submit" className="bg-olive text-white p-4 rounded-full hover:bg-olive-light transition-colors shadow-lg">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-[#EAE6DD] order-1 md:order-2 relative overflow-hidden flex items-center justify-center">
                    <div className="text-center p-12">
                        <span className="italic font-serif text-4xl md:text-5xl text-stone-text/20">
                            pure & simple
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
