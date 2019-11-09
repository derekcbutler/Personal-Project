import React from "react";
import { Line } from "react-chartjs-2";
// import Chart from "chart.js";
import "./Calculator.css";
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
            backgroundColor: "rgba(255,155,8, .2)",
            data: [0, 45000]
          },
          {
            label: "Bundle 2",
            backgroundColor: "rgba(255,155,8, .3)",
            data: [0,14400]
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
      ...this.state,
      input,
      x,
      y,
      z,
      // data: {
      //   datasets: [
      //     {
      //       data: [x, y, z]
      //     }
      //   ]
      // }
    });

    // let yearValues = [],
    // bundleOne = 0,
    // bundleTwo = 0,
    // bundleThree = 0;

  //? bundle 1 loop
  // for (let i = 0; i < 5; i++) {
  //   let bOneValues = bundleOne + this.state.x * 750 * 12;
  //   yearValues.push(bOneValues);
  // }
  // for (let j = 0; j < 5; j++) {
  //   let bTwoValues = bundleTwo + this.state.y * 300 * 12;
  //   yearValues.push(bTwoValues);
  // }
  // for (let k = 0; k < 5; k++) {
  //   let bThreeValues = bundleThree + this.state.z * 75 * 12;
  //   yearValues.push(bThreeValues);
  // }
  // this.setState({
  //   data: {
  //     datasets: [
        
      //   {
      //     data: [
      //       yearValues[0],
      //       yearValues[1],
      //       yearValues[2],
      //       yearValues[3],
      //       yearValues[4]
      //     ]
      //   },
      //   {
      //     data: [
      //       yearValues[5],
      //       yearValues[6],
      //       yearValues[7],
      //       yearValues[8],
      //       yearValues[9]
      //     ]
      //   },
      //   {
      //     data: [
      //       yearValues[10],
      //       yearValues[11],
      //       yearValues[12],
      //       yearValues[13],
      //       yearValues[14]
      //     ]
      //   }
      // ]
    // }
  // });
  };


  render() {
    console.log(this.state.data.datasets[0])

    return (
      <div className="chart-page">
        **Investable amounts are in increments of $2,500**
        <Line
          className="chart"
          data={this.state}
          options={{
            title: {
              
              display: true,
              text: "Minimum return amount's per Bundle"
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
                    stepSize: 5000,
                    max: 50000,
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
          data = {this.state.data}

        />
        <br></br>
        <div>
          RETURNS CALCULATOR
          <br></br>
          <br></br>
          {`Investment amount : `}
          <input placeholder="$" onChange={e => this.calculator(e)} />
          <br></br>
          <br></br>
          {/* <br></br> */}
          <div>
            package 1 count: {`${this.state.x}`}
            <br></br>
            monthly return: {`${this.state.x * 750}`}
          </div>
          <br></br>
          <div>
            package 2 count:{`${this.state.y}`}
            <br></br>
            monthly return: {`${this.state.y * 300}`}
          </div>
          <br></br>
          <div>
            package 3 count: {`${this.state.z}`}
            <br></br>
            monthly return: {`${this.state.z * 75}`}
          </div>
          <br></br>
          <div>
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
