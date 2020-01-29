import React from "react";
import Footer from "../Footer/Footer";
import "./Landing.css";
import { Link } from "react-router-dom";
import server from "../../../images/serverRoom.jpg";
import enduroLogo from "../../../images/ENDUROLogo.png";

function Landing() {
  return (
    <div className="body">
      <div className="page">
        <div className="image-stack">
          <img id="serverPic" src={server} />

        </div>
        <div id="up-pic">
          <img id="enduroLogo" src={enduroLogo} />
          <br></br>
          <h2>THE FUTURE AT YOUR FINGERTIPS</h2>
        </div>

        {/* <img id="serverPic" /> */}
        <br></br>
        <section className="text">
          We live in financially challenging times. You've seen the headlines
          about the huge number of Americans who are not sure that they will
          have enough money to retire or pay for their children's education.
          <br></br>
          According to a recent study by TransAmerica, the median retirement
          savings for American workers is right about $50,000. Not very much
          when you consider that the average family can spend that one year. In
          addition to that, 59% of Americans worry about money and they
          especially worry about paying for retirement and college for their
          kids. We are also told to invest for the future. But with current
          stock markets at record highs, along with the real estate market too,
          one might tend to be a bit concerned. Other options? Precious metals
          is a good way to preserve your current wealth but if you don't have
          much, you can't protect much. Insurance annuities may seem like an
          option but so many of those have tons of hidden costs and loopholes.
          Savings accounts and CDs have been paying nearly 0% interest for the
          past decade plus and we all know that inflation is NOT 0% during that
          time. So what is a person supposed to do? Not much until now....
          <br></br> What if there was something that would pay you a contracted
          lease payment of 3% per month* for 5 years guaranteed and backed by
          major insurance companies? Basically, you almost double your money in
          5 years, but on top of that, what if that same opportunity also
          returned your entire principal back to you at the end of 10 years?
          Sound too good to be true? Keep reading.... For example; If you could
          receive an extra $450 per month, would that help your current
          lifestyle? What could you use that money for? Pay down your mortgage?
          Pay off your car, credit cards or medical bills? You could donate more
          to charity or put it towards your kids education. The options are
          endless. <>Haven't heard of this opportunity before?</> That is
          because until October of 2019 it did not exist. It is a new hybrid
          creation due to the insatiable demand for more expensive data
          technology assets combined with the guarantee of the Total Product
          Protection Insurance program. This is genius! <br></br> Major
          industries like the rental car business and heavy equipment operators
          have utilized sale and lease back programs for decades. Do you think
          car rental companies like Hertz and Budget own all the cars that they
          rent? They lease a percentage of them each year in order to minimize
          their capital outlays and maximize their inventories. The same thing
          is true with companies that buy heavy equipment from Caterpillar and
          then lease it to excavating contractors. These are big businesses. Why
          am I telling you all this? You will see in a moment... <br></br>Have
          you ever wanted to own rental real estate because of all the benefits
          like appreciation, cash flow, tax deductions etc? But then you didn’t
          buy the property because of the down payment or you couldn’t qualify
          for the new loan? Or perhaps you decided against the purchase as you
          did not want to deal with deadbeat tenants or stopped up toilets? What
          if I could show you an opportunity that has all the benefits of owning
          real estate but without any of the negatives? Let's call this
          opportunity <>“Virtual Real Estate”</> for lack of a better term. Are
          you ready to learn more about this ultimate financial strategy?
        </section>
        <h3 className="redirect">
          <Link to="/about-product">click here for your free report.</Link>
        </h3>
        <br></br>
      </div>
      <br></br>

      <Footer />
    </div>
  );
}
export default Landing;
