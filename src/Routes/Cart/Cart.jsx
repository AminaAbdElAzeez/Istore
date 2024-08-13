import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartProvider";
import PagenationRoutes from "../../components/PagenationRoutes/PagenationRoutes";

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <PagenationRoutes route="Home" title="Cart" />
          </div>
        </div>
        <div className="row">
          {cartItems.length === 0 ? (
            <div className="col-lg-12">
              <div className="empty">
                <p className="empty-cart-message">Your cart is empty🤷‍♂️😳.</p>
                <Link to="/shop" className="return-to-shop">
                  Return to Shop
                </Link>
              </div>
            </div>
          ) : (
            <>
              {}
              <div className="col-lg-8 col-md-12 col-sm-12">
                {cartItems.map((item) => (
                  <div className="col-lg-12" key={item.id}>
                    <div className="cart-box">
                      <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12">
                          <div className="cart-info">
                            <img src={item.images[0]} alt={item.title} />
                            <div className="cart-info-text">
                              <h4>{item.title}</h4>
                              <p className="cart-info-desc">
                                {item.description}
                              </p>
                              <p className="cart-info-price">${item.price}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="cart-box-quantity">
                            <button
                              className="bi bi-plus-lg"
                              onClick={() =>
                                addToCart({
                                  ...item,
                                  quantity: item.quantity + 1,
                                })
                              }
                            ></button>
                            <b>{item.quantity}</b>
                            <button
                              disabled={item.quantity <= 1}
                              className="bi bi-dash-lg"
                              onClick={() =>
                                addToCart({
                                  ...item,
                                  quantity: item.quantity - 1,
                                })
                              }
                            ></button>
                            <p className="cart-box-price">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <i
                              className="bi bi-trash-fill"
                              onClick={() => removeFromCart(item.id)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="cart-table">
                  <h4>Cart Total</h4>
                  <ul className="cart-list">
                    <li>
                      Subtotal <span>${totalPrice}</span>
                    </li>
                    <li>
                      Shopping <span>Free</span>
                    </li>
                    <li>
                      Total <span>${totalPrice}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="carts-btn">
                    <Link to="/shop">Return To Shop</Link>
                    <Link to="/checkout">Update Cart</Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form className="copon">
                    <input placeholder="Coupon Code" type="text" />
                    <button>Apply Coupon</button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
