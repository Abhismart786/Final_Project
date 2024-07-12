// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../config/config';
// import { Icon } from 'react-icons-kit';
// import { cart } from 'react-icons-kit/entypo/cart';
// import { CartContext } from '../global/CartContext';
//import Logo from  '../images/ecommerce.svg'
// export const Navbar = ({ user }) => {

    //     const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);

//     // handle logout
//     const handleLogout = () => {
//         auth.signOut().then(() => {
//             // Navigate logic here if using navigate
//         });
//     };

//     // Navigate function using navigate hook
//     const handleNavigation = (path) => {
//         // Navigate logic here if using navigate
//     };

//     return (
//         <div className='navbox'>
//             {/* Navbar content */}
//         </div>
//     );
// };
// export default Navbar
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { auth } from '../config/config';
// // import { Icon } from 'react-icons-kit';
// // import { cart } from 'react-icons-kit/entypo/cart';
// // import { CartContext } from '../global/CartContext';
// // import PropTypes from 'prop-types';
// import logo from '../images/ecommerce.svg';

// export const Navbar = () => {
   

//     return (
//         <div>
//             <div>
//                 <img src={logo} alt="E-commerce Logo" width = "20px" height = "20px"/>
//             </div>
//             <div>    
//                 <span><Link to="/signup" className='navlink'>SIGN UP</Link></span>
//                 <span><Link to="/login" className='navlink'>LOGIN</Link></span>
//             </div>
//         </div>
//     );
// };


// export default Navbar;
// import React from 'react';

import logo from '../images/ecommerce.svg'; // Adjust the path to your logo
import cartLogo from '../images/add-to-cart.png'; // Adjust the path to your add-to-cart logo
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="E-commerce Logo" />
        </div>
        <div className="navbar-right">
          <img src={cartLogo} alt="Add to Cart Logo" className="cart-logo" />
          <div className="navbar-links">
            <span><Link to="/signup" className="navlink">SIGN UP</Link></span>
            <span><Link to="/login" className="navlink">LOGIN</Link></span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;