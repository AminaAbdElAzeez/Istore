import { useContext } from "react";
import CartContext from "../../Context/CartProvider";
import "./CheckOut.css";
import image1 from "../../assets/Frame 834.png";
import PagenationRoutes from "../../components/PagenationRoutes/PagenationRoutes";

function CheckOut() {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <section className="Billing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <PagenationRoutes
              route="Home / cart / viewProducts "
              title="Chechout"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <h3 className="bittling-title">Billing Details</h3>
            <label htmlFor="name">First Name*</label>
            <input type="text" id="name" />
            <label htmlFor="cname">Company Name</label>
            <input type="text" id="cname" />
            <label htmlFor="sname">Street Address*</label>
            <input type="text" id="sname" />
            <label htmlFor="aname">Apartment, floor, etc. (optional)</label>
            <input type="text" id="aname" />
            <label htmlFor="tname">Town/City*</label>
            <input type="text" id="tname" />
            <label htmlFor="pname">Phone Number*</label>
            <input type="text" id="pname" />
            <label htmlFor="ename">Email Address*</label>
            <input type="email" id="ename" />
            <div className="checkbox-input">
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
          <div className="col-lg-7">
            {cartItems.map((item) => {
              return (
                <div className="check-product" key={item.id}>
                  <div className="check-info">
                    <img src={item.images[0]} alt={item.title} />
                    <h5 className="check-product-title">{item.title}</h5>
                    <p>${item.price}</p>
                  </div>
                  <div className="check-box">
                    <b>Subtotal:</b> ${totalPrice}
                  </div>
                  <hr />
                  <div className="check-box">
                    <b>Shipping:</b> Free
                  </div>
                  <hr />
                  <div className="check-box">
                    <b>Quantity:</b> {item.quantity}
                  </div>
                  <hr />
                  <div className="check-box check-total">
                    <b>Total:</b> ${totalPrice}
                  </div>
                  <div className="check-info-input-img">
                    <div className="check-info-input">
                      <div className="ckeck-radio">
                        <input id="Bank" type="radio" name="g" />
                        <label htmlFor="Bank">Bank</label>
                      </div>
                      <div className="ckeck-radio">
                        <input id="Cash" type="radio" name="g" />
                        <label htmlFor="Cash">Cash on delivery</label>
                      </div>
                    </div>
                    <img src={image1} alt="checkout" />
                  </div>
                  <div className="check-btn">
                    <input type="text" placeholder="Coupon Code" />
                    <input type="submit" value="Apply Coupon" />
                    <button>Place Order</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
