import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-creme font-sans selection:bg-olive selection:text-white">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-grain z-0 mix-blend-multiply"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
            ? 'bg-creme/90 backdrop-blur-md border-stone-200/20 py-4'
            : 'bg-transparent border-transparent py-6'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-1 hover:opacity-60 transition-opacity"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} className="text-stone-text" />
              </button>
              <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-olive">
                well & rooted<span className="text-olive/50">.</span>
              </Link>
            </div>

            <ul className="hidden md:flex gap-10 items-center">
              {[
                { name: 'Shop', path: '/shop' },
                { name: 'Our Story', path: '/#about' },
                { name: 'Ingredients', path: '/#ingredients' },
                { name: 'Journal', path: '/#journal' }
              ].map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('/#') ? (
                    <a href={item.path} className="text-sm font-medium tracking-wide uppercase hover:text-olive transition-all duration-300 relative group">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <Link to={item.path} className="text-sm font-medium tracking-wide uppercase hover:text-olive transition-all duration-300 relative group">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <button className="hidden sm:block hover:opacity-60 transition-opacity">
                <Search size={20} className="text-stone-text" strokeWidth={1.5} />
              </button>
              <button className="relative hover:opacity-60 transition-opacity group">
                <ShoppingBag size={20} className="text-stone-text group-hover:fill-stone-text/10 transition-colors" strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-olive text-white text-[10px] flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-creme z-50 transition-transform duration-500 ease-in-out md:hidden flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X size={24} className="text-stone-text" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-serif">
            {[
              { name: 'Shop', path: '/shop' },
              { name: 'Our Story', path: '/#about' },
              { name: 'Ingredients', path: '/#ingredients' },
              { name: 'Journal', path: '/#journal' }
            ].map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-olive transition-colors relative group italic"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-olive transition-colors relative group italic"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
