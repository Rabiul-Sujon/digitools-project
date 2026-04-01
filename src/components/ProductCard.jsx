
const ProductCard = ({ product,handleAddToCart, cart }) => {
    const getImageUrl = (name) => {
    return new URL(`../assets/products/${name}`, import.meta.url).href;
    // Solve the image path using the current file location
  };
  const isAlreadyInCart = cart.find((item) => item.id === product.id);
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative h-full">
      
      {/* 1. Tag (Top Right) */}
      <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-sm font-semibold ${
        product.tagType === 'popular' ? 'bg-purple-100 text-purple-600' : 
        product.tagType === 'new' ? 'bg-green-100 text-green-600' : 
        'bg-orange-100 text-orange-600'
      }`}>
        {product.tag}
      </div>

      {/* 2. Icon Container */}
      
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
     <img 
    src={getImageUrl(product.icon)}
    alt={product.name} 
    className="w-10 h-10 object-contain"/>
    </div>

      {/* 3. Title & Description */}
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
        {product.description}
      </p>

      {/* 4. Price & Period */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-bold text-slate-900">${product.price}</span>
        <span className="text-slate-400 text-sm">/{product.period}</span>
      </div>

      {/* 5. Features List */}
      <div className="space-y-3 mb-8">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-600 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>

      {/* 6. Buy Now Button */}
    <button 
        disabled={isAlreadyInCart}
        onClick={() => handleAddToCart(product)}
        className={`w-full font-bold py-4 rounded-2xl transition-all duration-300 ${
          isAlreadyInCart 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-100 cursor-pointer'
        }`}
      >
        {isAlreadyInCart ? 'Already in Cart' : 'Buy Now'}
      </button>
    </div>
  );
};


export default ProductCard;