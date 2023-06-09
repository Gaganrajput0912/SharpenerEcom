import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../store/CartContext";
const Header = () => {
                
  const { cartItems, setShow, setCartItems, setToken, setUserEmail, token } =
    useContext(CartContext);
  const navigate= useNavigate()
  
  return (
    <>
      <header bg="light" className=" d-flex p-2 justify-content-around header ">
        <div className=" d-flex justify-content-between gap-4"  >
          <button className=" btn"  style={{fontSize:"25px"}}>
            <Link to="/" id="link">
              HOME
            </Link>
          </button>
          <button className=" btn" style={{fontSize:"25px"}}>
            <Link to="/store" id="link">
              STORE
            </Link>
          </button>
          <button className=" btn text-white" style={{fontSize:"25px"}}>
            <Link to="/about" id="link">
              ABOUT
            </Link>
          </button>
          <button className=" btn text-white" style={{fontSize:"25px"}}>
            <Link to="/ContactUs" id="link">
              CONTACT US
            </Link>
          </button>
          <button className=" btn" style={{fontSize:"25px"}}> 
            {!token ? <Link to="/login" id="link" >
              LOGIN
            </Link >
              : <div onClick={() => {
                localStorage.removeItem('idToken')
                setToken(null)
                localStorage.removeItem("userEmail");
                setUserEmail(null)
                setCartItems([])
                navigate('/login')
              }
              }>LOGOUT</div> 
  }
          </button>
        </div>
        <div
          onClick={() => setShow(true)}
          className="btn d-flex gap-2 text-white bg-gradient"
        >
          <HiShoppingCart
            style={{ height: "25px", marginTop: "2px", width: "25px" }}
          />
          {cartItems.length}
        </div>
      </header>
      {/* <HeadText /> */}
    </>
  );
};

export default Header;
