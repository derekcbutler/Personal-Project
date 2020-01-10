import React, { useState } from "react";
import "./AboutProduct.css";
import cashBills from "../../../images/cashBills.jpeg";
import Footer from '../Footer/Footer';

function AboutProduct() {
  return (
    <div className="page">
      <section className="narrative">
      <br></br>
        We live in financial challenging times. You've seen the headlines about
        the huge number of Americans who are not sure that they will have enough
        money to retire or pay for their children's education.
        <br></br>
        According to a recent study by TransAmerica, the median retirement
        savings for American workers is right around $50,000. Not very much
        money when you consider that the average family spends that in one year.
        In addition to that, 59% of Americans worry about money and they
        especially worry about paying for retirement and college for their kids.
        <br></br>
        Historically, financial advisers have generally suggested that in order
        to fund these major expenses we Americans just need to spend less and
        save more. That is often easier said than done especially as the cost of
        basic living continues to increase and most people's wages are not
        keeping up with these expenses. The ability to save enough seems out of
        reach for so many.
        <br></br>
        We are also told to invest for the future. But with current stock
        markets at record highs, real estate too, one might tend to be a bit
        concerned. Other options? Precious metals is a good way to preserve your
        current wealth if you don't have much, you cant protect much. Insurance
        annuities may seem like an options but so many of those have tons of
        hidden costs and loopholes. Savings accounts and CDs have been paying
        nearly 0% interest for the past decade plus and we all know that
        inflation is NOT 0% during that time. So what is a person supposed to
        do? Not Much until now...
        <img id='cash-bills' src={cashBills} />
        <br></br>
        <br></br>
        What if there was an investment that would pay you 3% per month for 5
        years guaranteed and backed by major insurance companies? So basically,
        you double your money in 60 months and on top of that, what if that same
        investment also returned your entire principal back to you at the end of
        10 years? Sound too good to be true? Keep reading...
        <br></br>
        What if that same investment could improve your monthly cash flow,
        starting next month to the tune of $450 per month? Would that help your
        current life style? What could you use that money for? Pay down your
        mortgage? Pay off your car, credit cards, or medical bills? You could
        donate more to charity or put it towards your kids education. The
        options are endless.
        <br></br>
        Haven't heard of this investment before? You're right, because until
        October of 2019 it did not exist. It is a new hybrid creation due to the
        high demand for more and newer expensive technology combined with the
        modern world or Total Product Protection insurance programs. This is
        genius!
        <br></br>
        Due to the huge and insatiable need in modern technology there is a huge
        shortfall now and in the forseeable future for more and newer servers to
        house and process all of the data. Companies like Amazon, Google,
        Netflix, the U.S. Government and thousands of other major companies are
        in need of additional storage space for all their data.
        <br></br>
        Be a part of this booming technology sector without any risk to your
        principal! We are the only server technology company that is 100% green
        at the same time
      </section>
      {/* <Footer /> */}
    </div>
  );
}
export default AboutProduct;
