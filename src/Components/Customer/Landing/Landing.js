import React from 'react';
import Footer from '../Footer/Footer';
import './Landing.css'
import picture from '../../../serverPic.jpg';

function Landing() {
    return(
        <div className='body'>           
            <div>
                <img id='serverPic' src={picture} />
            </div>
            <Footer />
        </div>
    )
}
export default Landing;

