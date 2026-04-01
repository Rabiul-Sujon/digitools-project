import React from 'react'

const getImageUrl = (name) => {
  return new URL(`../assets/products/${name}`, import.meta.url).href;
};

const ProductCart = ({ cart, handleRemove, handleCheckout }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 mt-10">
      {/* Main Container Card */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-10">
        <h2 className="text-xl font-bold text-slate-900 mb-8">Your Cart</h2>

        {/* List of Cart Items */}
        <div className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div 
                key={item.product_id} 
                className="flex items-center justify-between bg-[#F9FAFB] p-4 rounded-2xl border border-gray-50"
              >
                <div className="flex items-center gap-5">
                  {/* PRODUCT IMAGE CONTAINER */}
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm p-2 overflow-hidden">
                     <img 
                     src={getImageUrl(item.icon)} 
                     alt={item.name}            
                     className="w-10 h-10 object-contain" 
                     />
                  </div>
                  
                  {/* TEXT DETAILS */}
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                    <p className="text-slate-400 text-sm font-medium">${item.price}</p>
                  </div>
                </div>

                {/* REMOVE BUTTON  */}
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="text-[#F43F5E] hover:text-[#E11D48] text-sm font-semibold transition-colors px-2"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-400 font-medium italic">Your cart is currently empty.</p>
            </div>
          )}
        </div>

        {/* PRICE SUMMARY */}
        <div className="mt-10 flex justify-between items-center border-t border-gray-100 pt-8">
          <span className="text-slate-400 font-medium">Total:</span>
          <span className="text-2xl font-black text-slate-900">${totalPrice}</span>
        </div>

        {/* CHECKOUT BUTTON */}
        <button 
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className="w-full mt-8 py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-lg rounded-2xl shadow-lg shadow-purple-200 transition-all active:scale-[0.98] disabled:bg-slate-200 disabled:shadow-none"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductCart;