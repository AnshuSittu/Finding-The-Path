import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  console.log("header Render");

  // if No dependence array => useEffect is called on every component render
  /*  useEffect(()=> {
    console.log("useEffect Called")
  }); */

  //if the dependence array is
  //empty = [] => useEfeect is called intion render and just Once when comepnent is render for first time

  /* useEffect(()=> {
    console.log("useEffect Called")
  },[]); */

  //If dependence array is [btnNameReact] => called every time btnNameReact is updated

  /*  useEffect(()=> {
    console.log("useEffect Called")
  },[btnNameReact]);
 */

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          {/* here we have put condtion if btn is login then Logout and vice versa */}
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
