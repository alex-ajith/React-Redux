import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slice/cart-slice";

function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex p-3 space-x-5">
        {/* Image section */}
        <img
          src={cartItem?.image}
          className="h-28 w-28 object-cover rounded-lg"
          alt={cartItem?.title}
        />
        {/* Text section */}
        <div className="ml-5 self-start space-y-2">
          <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
          <p className="text-white text-lg font-semibold">${cartItem?.price}</p>
        </div>
        {/* Remove button */}
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-700 text-white border-2 rounded-lg font-bold py-2 px-6 hover:bg-red-600 transition-colors"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTile;
