import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const { getTotalCartAmount, drug_list, cartItems, url, token, setCartItems } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // Check if user is logged in and has items in cart
  useEffect(() => {
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/");
      return;
    }

    if (getTotalCartAmount() === 0) {
      toast.error("Your cart is empty");
      navigate("/");
      return;
    }
  }, [token, getTotalCartAmount, navigate]);

  const placeOrder = async (event) => {
    event.preventDefault();

    // Check if user is logged in
    if (!token) {
      toast.error("Please login to place an order");
      navigate("/");
      return;
    }

    // Check if cart is empty
    if (getTotalCartAmount() === 0) {
      toast.error("Your cart is empty");
      navigate("/");
      return;
    }

    // Validate form data
    if (!data.firstName || !data.lastName || !data.email || !data.street || !data.city || !data.state || !data.phone) {
      toast.error("Please fill all required fields");
      return;
    }

    // Prepare order items
    let orderItems = [];
    drug_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = {...item};
        itemInfo.quantity = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    // Prepare order data
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    try {
      console.log("Placing order with token:", token);

      // Send request with authorization header
      let response = await axios.post(
        url + "/api/order/place",
        orderData,
        { headers: { authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success("Order placed successfully!");
        // Clear cart after successful order
        setCartItems({});
        navigate("/");
      } else {
        toast.error(response.data.message || "Error placing order!");
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error(error.response?.data?.message || "Error placing order!");
    }
  };



  return (
    <>
      <Navbar/>
      <form className="place-order" onSubmit={placeOrder}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={onChangeHandler}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={onChangeHandler}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="street"
            value={data.street}
            onChange={onChangeHandler}
            placeholder="Street"
            required
          />
          <div className="multi-fields">
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={onChangeHandler}
              placeholder="City"
              required
            />
            <input
              type="text"
              name="state"
              value={data.state}
              onChange={onChangeHandler}
              placeholder="State"
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={onChangeHandler}
            placeholder="Phone"
            required
          />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotals</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button type="submit">PLACE ORDER</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
