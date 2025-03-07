import "./Listings.css";
import { products } from "../Products/Products";

function Listings() {
  return (
    <div className="listings">
      {products.map((item) => (
        <div className="product" key={item.id}>
          <div className="product-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="product-details">
            <div className="product-header">
              <span className="brand">{item.brand}</span>
              <h2 className="name">{item.name}</h2>
            </div>
            <div className="product-price">
              {item.discount > 0 ? (
                <>
                  <span className="discounted-price">
                    ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
                  </span>
                  <span className="original-price">${item.price.toFixed(2)}</span>
                  <span className="discount">-{item.discount}%</span>
                </>
              ) : (
                <span className="price">${item.price.toFixed(2)}</span>
              )}
            </div>
            <p className="rating">⭐ {item.rating} / 5</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listings;
