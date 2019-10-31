import React from 'react';
// import Nav from '../Nav/Nav';
import Calculator from '../Calculator/Calculator';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import './Landing.css'

function Landing() {
    return(
        <div className='body'>           
            <Calculator />
            <Products />
            <Footer />
        </div>
    )
}
export default Landing;