import React from "react";
import { Line } from "react-chartjs-2";
// import Chart from "chart.js";
import "./Calculator.css";
// import { whileStatement } from "@babel/types";
// import Footer from "../Footer/Footer";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: 0,
      x: 0,
      y: 0,
      z: 0,

      labels: ["0", "year 1", "year 2", "year 3", "year 4", "year 5"],

      data: {
        datasets: [
          {
            label: "Bundle 1",
            backgroundColor: "rgba(255,0,0, .2)",
            data: [0, 45000]
          },
          {
            label: "Bundle 2",
            backgroundColor: "rgba(225,0,0, .3)",
            data: [0, 14400]
          },
          {
            label: "Bundle 3",
            backgroundColor: "rgba(248,77,77, 1)",
            data: [0, 4500]
          }
        ]
      }
    };
  }

  calculator = e => {
    let input = e.target.value;
    let x = 0;
    let y = 0;
    let z = 0;

    do {
      if (input >= 15000) {
        input -= 15000;
        x += 1;
      } else if (input >= 7500) {
        input -= 7500;
        y += 1;
      } else if (input >= 2500) {
        input -= 2500;
        z += 1;
      }
    } while (input >= 2500);
    this.setState({
      input,
      x,
      y,
      z,
      data: {
        datasets: [
          {
            label: "Bundle 1",
            backgroundColor: "rgba(255,0,0, .2)",
            data: [0, (x *= 750 * 60)]
          },
          {
            label: "Bundle 2",
            backgroundColor: "rgba(225,0,0, .3)",
            data: [0, (y *= 300 * 60)]
          },
          {
            label: "Bundle 3",
            backgroundColor: "rgba(248,77,77, 1)",
            data: [0, (z *= 75 * 60)]
          }
        ]
      }
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="chart-page">
        **Investable amounts are in increments of $2,500**
        <Line
          className="chart"
          data={this.state}
          options={{
            title: {
              display: true,
              text: "Returns per bundle after 5 years",
              fontColor: "black"
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
                    steps: 10,
                    fontColor: "black",
                    fontSize: 15
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
                    max: 16,
                    fontColor: "black",
                    data: this.state.label
                  }
                }
              ]
            }
          }}
          data={this.state.data}
        />
        <br></br>
        <div>
          RETURNS CALCULATOR
          <br></br>
          <br></br>
          {`Investment amount : `}
          <input className='input' placeholder="$" onChange={e => this.calculator(e)} />
          <br></br>
          <br></br>
          <div className='package-display'>
            package 1 count: {`${this.state.x}`}
            <br></br>
            monthly return: {`${this.state.x * 750}`}
          </div>
          <br></br>
          <div className='package-display'>
            package 2 count:{`${this.state.y}`}
            <br></br>
            monthly return: {`${this.state.y * 300}`}
          </div>
          <br></br>
          <div className='package-display'>
            package 3 count: {`${this.state.z}`}
            <br></br>
            monthly return: {`${this.state.z * 75}`}
          </div>
          <br></br>
          <div className='package-display'>
            TOTAL MONTHLY RETURN:{" "}
            {`${this.state.x * 750 + this.state.y * 300 + this.state.z * 75}`}
            {/* amount remainder: $
        {this.state.input} */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Calculator;
