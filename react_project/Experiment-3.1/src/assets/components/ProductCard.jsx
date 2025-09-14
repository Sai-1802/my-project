function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <b>{name}</b>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;
