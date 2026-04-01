import React from 'react'

const ProductHeader = ({ view, setView, cartCount }) => {
  return (
    <section className="py-16 px-4 text-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        Premium Digital Tools
      </h2>
      
      {/* Description */}
      <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
        Choose from our curated collection of premium digital products designed 
        to boost your productivity and creativity.
      </p>

      {/* Toggle Pill Container */}
      <div className="inline-flex items-center bg-white border border-slate-100 p-2 rounded-full shadow-sm">
        
        {/* Products Button */}
        <button 
          onClick={() => setView('products')}
          className={`px-10 py-3 rounded-full font-bold transition-all cursor-pointer duration-300 ${
            view === 'products' 
            ? 'bg-[#7C3AED] text-white shadow-lg shadow-purple-200' 
            : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Products
        </button>

        {/* Cart Button */}
        <button 
          onClick={() => setView('cart')}
          className={`px-10 py-3 rounded-full font-bold transition-all cursor-pointer duration-300 flex items-center gap-2 ${
            view === 'cart' 
            ? 'bg-[#7C3AED] text-white shadow-lg shadow-purple-200' 
            : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Cart ({cartCount})
        </button>
        
      </div>
    </section>
  );
};

export default ProductHeader;