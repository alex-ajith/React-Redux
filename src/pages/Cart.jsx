import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/CartTile";
function Cart() {
  const [totalCart, SetTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    SetTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <>
      {cart?.length ? (
        <div className="min-h-[80-vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map((cartItem) => (
              <CartTile cartItem={cartItem} />
            ))}
          </div>
          <div className="flex flex-col justify-center itmes-center p-5 space-y-5 mt-14">
            <h1 className="font-bold text-lg text-red-800">
              Your Cart Summary
            </h1>
            <p>
              <span className="text-gray-800 font-bold">Total Items</span>
              <span> : {cart.length}</span>
            </p>
            <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span> : {totalCart}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl -mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 m-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
