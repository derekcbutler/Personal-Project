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

      labels: ["year 1", "year 2", "year 3", "year 4", "year 5", "year 6"],

      data: {
        datasets: [
          {
            label: "Bundle 1",
            backgroundColor: "rgba(255,176,8, .7)",
            data: ""
          }
        ]
      }
    };
  }


  //?this will display the data and annual amounts on the chart
  setData = () => {
    let yearValues = [],
    bundleOne = 0,
    bundleTwo = 0,
    bundleThree = 0,

    //? bundle 1 loop
    for (let i = 0; i < 5; i ++){
      let bOneValues = bundleOne + 750 * 12
      yearValues.push(bOneValues)
    }
    for (let j = 0; j < 5; j++){
      let bTwoValues = bundleTwo + 300 * 12
      yearValues.push(bTwoValues)
    }
    for (let k = 0; k < 5; k++){
      let bThreeValues = bundleThree + 75 * 12
      yearValues.push(bThreeValues)
    }
  };

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
      data: {
        datasets: [
          {
            data: [x, y, z]
          }
        ]
      }
    });
    // let insertData = [x, y, z];
   
    // this.state.data.datasets.data
    // console.log(input, x, y, z);
  };

  render() {
    // console.log(this.state.input)
    console.log(this.state);
    return (
      <div className="chart-page">
        **Investable amounts are in increments of $2,500**
        <Line
          className="chart"
          data={this.state}
          //   style={{height:'500px'}}
          options={{
            title: {
              // responsive: true,
              display: true,
              text: "YEARLY RETURNS CALCULATOR"
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
                    fontSize: 15
                    //       }
                    //     }
                    //   ],
                    //   xAxes: [
                    //     {
                    //       ticks: {
                    //         fontSize: 10,
                    //         beginAtZero: true,
                    //         steps: 5,
                    //         stepSize: 1,
                    //         max: 16,
                    //         fontColor: "black",
                    //         data: this.state.label
                  }
                }
              ]
            }
          }}
          // data={this.state.data}
        />
        <br></br>
        <div>
          Investment amount :
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
