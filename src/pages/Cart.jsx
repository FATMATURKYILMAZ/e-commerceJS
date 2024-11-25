import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import edilmeli
import { useDispatch, useSelector } from "react-redux"; // Redux Hook'ları import edilmeli
import { getCartTotal } from "../redux/cartSlice"; // getCartTotal import edilmeli
import CartCompo from "../components/cartt/CartCompo";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemsCount } = useSelector((state) => state.carts);

  console.log(carts, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? 
        <div> {
          carts?.map((cart, i) => (
            <CartCompo key={i} cart={cart} />
          ))
        }
        <div className="flex items-center justify-end text-2xl">TOPLAM TUTAR: <span className="font-bold text-3xl ml-2"> {totalAmount} TL</span></div>
       </div> : (
        <div>Kartınız Boş..</div>
      )}
    </div>
  );
};

export default Cart;
