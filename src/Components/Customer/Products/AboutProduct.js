import React, { useState } from "react";
import "./AboutProduct.css";
import cashBills from "../../../images/cashBills.jpeg";
import Footer from "../Footer/Footer";

function AboutProduct() {
  return (
    <div className="page">
      <section className="narrative">
        <br></br>
        We live in turbulent economic times. You cannot pick up a newspaper or
        watch the news without hearing about some kind of financial challenge.
        The stock market is at an all time high. And who can forget the crash of
        2008? The real estate Market is also in another all time high bubble.
        Gold and Silver are also very high. The signs are all around us that
        there will be another significant correction very soon. But what options
        do you have? Just leave your money in the bank to earn a measly 1-2% per
        year? That does not even keep pace with inflation! What can you do?
        Don’t despair. Take a few moments to review the Cloud Paycheck solution.
        It is the most amazing cash flow generating product whose time has come
        and is perfectly poised to be the safest and best “investment” of the
        21st century. But we Shouldn’t really call it an investment because that
        implies that there is some risk, some down side. But with the Cloud
        Paycheck solution the risk has Basically been eliminated and the
        downside erased. <br></br>
        <h4>How? In a nutshell: </h4>
        You purchase a Cloud Paycheck Server. Your server is then automatically
        leased to the only 100% Green Blockchain Server Farm in the continental
        United States. Your servers will be used to do blockchain data mining
        and storage functions for major Fortune 500 Companies such as
        Caterpillar, Samsung, Intel, and many others. You will receive a check
        every month for 5 years at 36% annualized return nearly doubling your
        money. At the end of that term the server is worn out and basically your
        contract is done. Unless of course you continue to buy more servers in
        the interim. Your return is 3% per month so you can do the math
        depending how many servers you want. There really is no better place to
        put your hard earned money. Don’t forget to fill out the form to request
        the return of your original purchase price from the insurance company.
        You can get 33% back at the end of the 5 years or the whole 100% back
        after a total of 10 years. Either way this icing on the cake is
        spectacular and should not be ignored.
        <br></br>
        <br></br>
        We live in financially challenging times. You've seen the headlines
        about the nearly 60% of Americans who are not sure that they will have
        enough money to retire or even pay for their children's education.
        According to a recent study by <a>TransAmerica</a>, the median retirement
        savings for American workers is right around $50,000. Not very much
        money when you consider what it costs to pay for just the basics these
        days.. Historically, financial advisers have suggested that in order to
        fund these major expenses we Americans just need to spend less and save
        more. That is often easier said than done especially as the cost of
        basic living continues to increase and most people's wages are not
        keeping up with these expenses. The ability to save enough seems out of
        reach for so many.
        <img id="cash-bills" src={cashBills} />
        <br></br>
        <br></br>
        What if there was an investment that would pay you 3% per month for 5
        years, guaranteed and backed by major insurance companies? So basically,
        you nearly double your money in 60 months and on top of that, the same
        “investment” also returned your entire principal back to you at the end
        of 10 years? Sound too good to be true? Keep reading… What if that same
        “investment” could improve your monthly cash flow, starting next month
        to the tune of $450 per month? Would that help your current lifestyle?
        What could you use that money for? Pay down your mortgage? Pay off your
        car, credit cards, or medical bills? You could donate more to charity or
        put it towards your kids education. The options are endless. Haven't
        heard of this investment before? You're right, because until October of
        2019 it did not exist. It is a new hybrid creation due to the high
        demand for more and newer expensive technology combined with the modern
        concept of the Total Product Protection insurance programs. This is
        genius! Due to the huge and insatiable need in modern technology there
        is a huge shortfall now and in the foreseeable future for more and newer
        servers to house and process all of the data. Companies like Amazon,
        Google, Netflix and thousands of other major and minor companies are in
        need of additional storage space for all their data. Welcome to the
        first and only 100% Green Blockchain Server Farm here in the USA. Become
        a part of this booming technology sector without virtually any risk to
        your principal! Click below if you would like a call or would like to be
        sent our information packet.
        <br></br>
        <br></br>
        <br></br>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
export default AboutProduct;
