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
      
      data: {
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
        }
    };
  }


  calculator = e => {
    var input = e.target.value;
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
        
    })
    console.log(input, x, y, z);
  };
  

  render() {
    return (
      <div className="chart-page">
        <Line
          className="chart"
          data={this.state}
          //   style={{height:'500px'}}
          options={{
            title: {
              responsive: true,
              display: true,
              text: "RETURNS CALCULATOR"
            },
            // legend: {
            //   display: true,
            //   position: "right"
            // },
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
        //  data = {this.state.data}
        />
        amount:
        <input placeholder="$" onChange={e => this.calculator(e)} />
        {/* <Footer /> */}
      </div>
    );
  }
}
export default Calculator;
