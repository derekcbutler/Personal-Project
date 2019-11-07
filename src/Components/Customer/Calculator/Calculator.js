import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js';
import "./Calculator.css";
// import Footer from "../Footer/Footer";

const state = {
  label: [
    "month 1",
    "month 2",
    "month 3",
    "month 4",
    "month 5",
    "month 6",
    "month 7",
    "month 8",
    "month 9",
    "month 10",
    "month 11",
    "month 12",
    "year 2",
    "year 3",
    "year 4",
    "year 5"
  ],
  data: [
    {
      label: "returns"
    }
  ]
};

class Calculator extends React.Component {
  render() {
    return (
      <div className="chart-page">
        <Bar
          className="chart"
          data={state}
        //   style={{height:'500px'}}
          options={{
            title: {
              display: true,
              text: "Monthly and yearly returns"
            },
            legend: {
              display: true,
              position: "right"
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: false,
                    beginAtZero: true,
                    steps: 5,
                    stepSize: 15000,
                    max: 100000,
                    fontColor: "black",
                    fontSize: 15,
                    // lineHeight: -50
                    // height: '200px'
                    
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                      fontSize: 10,
                      beginAtZero: true,
                      steps: 5,
                      stepSize: 1,
                      max:16,
                      fontColor: 'black',
                      data: state.label

                  }
                }
              ]
            }
          }}
        />
        amount:
        <input placeholder="$" />
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Calculator;
