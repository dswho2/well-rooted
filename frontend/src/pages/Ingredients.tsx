import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Ingredients() {
    const commitments = [
        "100% certified organic ingredients",
        "No refined sugars or artificial sweeteners",
        "No preservatives or additives",
        "Non-GMO verified",
        "Gluten-free options available",
        "Sustainably sourced",
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-olive transition-colors text-sm font-medium mb-8">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-serif mb-8">Our Ingredients</h1>

                <p className="text-xl text-muted leading-relaxed mb-12">
                    We believe that the best food starts with the best ingredients. Every item we source
                    is chosen with care, prioritizing organic, whole foods that nourish without compromise.
                </p>

                <div className="bg-creme-dark rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-serif mb-6">Our Commitments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {commitments.map((commitment, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="text-olive flex-shrink-0 mt-1" size={20} />
                                <span className="text-stone-text">{commitment}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="text-3xl font-serif mb-6">What We Use</h2>

                <div className="space-y-8 mb-12">
                    <div>
                        <h3 className="text-xl font-serif mb-3">Organic Whole Grains</h3>
                        <p className="text-muted leading-relaxed">
                            Rolled oats, quinoa, and ancient grains sourced from certified organic farms.
                            Rich in fiber and nutrients, our grains are minimally processed to retain their natural goodness.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif mb-3">Natural Sweeteners</h3>
                        <p className="text-muted leading-relaxed">
                            Raw honey, maple syrup, and dates provide natural sweetness without the blood sugar
                            spikes of refined sugars. Each sweetener is chosen for its unique flavor profile and nutritional benefits.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif mb-3">Nuts & Seeds</h3>
                        <p className="text-muted leading-relaxed">
                            Almonds, cashews, chia seeds, and more—all organic and minimally processed.
                            These provide healthy fats, protein, and essential minerals.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif mb-3">Superfoods</h3>
                        <p className="text-muted leading-relaxed">
                            Matcha, goji berries, cacao, and other nutrient-dense ingredients that add both
                            flavor and functional benefits to our products.
                        </p>
                    </div>
                </div>

                <div className="bg-olive/5 border border-olive/20 rounded-2xl p-8 text-center">
                    <p className="font-serif text-lg italic mb-2">
                        Questions about our ingredients or sourcing?
                    </p>
                    <Link to="/contact" className="text-olive hover:underline font-medium">
                        Get in touch with us
                    </Link>
                </div>
            </div>
        </div>
    );
}
