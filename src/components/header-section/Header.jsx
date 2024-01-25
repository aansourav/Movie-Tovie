import React, { useContext, useState } from "react";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../../context";
import Cart from "./Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { state } = useContext(MovieContext);

  const handleCartShow = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCart && <Cart onCartCancel={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <button
              onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full font-bold text-[13px] absolute top-[-14px] left-[17px] bg-[#12CF6F] text-white  p-[2px] w-[35px] h-[22px]">
                  {state.cartData.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
