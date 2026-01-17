import { ArrowLeft, Heart, Leaf, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OurStory() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-olive transition-colors text-sm font-medium mb-8">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-serif mb-8">Our Story</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-muted leading-relaxed mb-8">
                        Well & Rooted began with a simple belief: that food should nourish both body and soul,
                        connecting us back to the earth and to tradition.
                    </p>

                    <div className="aspect-[16/9] bg-stone-200 rounded-2xl mb-12 flex items-center justify-center">
                        <span className="text-stone-text/20 font-serif italic text-2xl">Story Image</span>
                    </div>

                    <h2 className="text-3xl font-serif mb-4">Rooted in Tradition</h2>
                    <p className="text-muted leading-relaxed mb-8">
                        Our journey started in a small kitchen, where we experimented with time-honored recipes
                        and whole, organic ingredients. We believe in slowing down, in crafting each batch with
                        intention, and in honoring the wisdom of traditional food preparation.
                    </p>

                    <h2 className="text-3xl font-serif mb-4">Made for Modern Life</h2>
                    <p className="text-muted leading-relaxed mb-12">
                        While we're rooted in tradition, we understand the demands of contemporary living.
                        That's why we've created nourishing foods that fit seamlessly into your busy life—
                        without compromising on quality or authenticity.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="text-olive" size={28} />
                            </div>
                            <h3 className="font-serif text-lg mb-2">Organic First</h3>
                            <p className="text-sm text-muted">Certified organic ingredients from regenerative farms</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="text-olive" size={28} />
                            </div>
                            <h3 className="font-serif text-lg mb-2">Small Batch</h3>
                            <p className="text-sm text-muted">Handcrafted in limited quantities for maximum freshness</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-olive" size={28} />
                            </div>
                            <h3 className="font-serif text-lg mb-2">Community</h3>
                            <p className="text-sm text-muted">Supporting local farmers and sustainable practices</p>
                        </div>
                    </div>

                    <div className="bg-creme-dark rounded-2xl p-8 md:p-12 text-center my-12">
                        <p className="text-2xl font-serif italic text-olive mb-4">
                            "Nourishment is more than nutrition—it's connection, intention, and care."
                        </p>
                        <p className="text-sm text-muted">— The Well & Rooted Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
