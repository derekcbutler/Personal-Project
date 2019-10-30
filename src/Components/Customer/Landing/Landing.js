import React from 'react';
// import Nav from '../Nav/Nav';
import Calculator from '../Calculator/Calculator';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';

function Landing() {
    return(
        <div>
            {/* <Nav /> */}
            <Calculator />
            <Products />
            <Footer />
        </div>
    )
}
export default Landing;