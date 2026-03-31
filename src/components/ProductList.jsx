import ProductCard from './ProductCard';

const ProductList = ({ products, handleAddToCart, cart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-10">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          handleAddToCart={handleAddToCart}
          cart={cart} 
        />
      ))}
    </div>
  );
};

export default ProductList;