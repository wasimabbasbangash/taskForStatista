import React from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

// const data = ["Cleaning", "Service", "Safety", "Quality", "Food taste"];

export const data = {
  brand1: {
    labels: ["Cleaning", "Service", "Safety", "Quality", "Food taste"],
    datasets: [
      {
        label: "Brand 1",
        data: [2, 9, 3, 5, 2],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  brand2: {
    labels: ["Cleaning", "Service", "Safety", "Quality", "Food taste"],
    datasets: [
      {
        label: "Brand 2",
        data: [6, 3, 7, 5, 8],
        backgroundColor: "rgba(170, 255, 10,0.2)",
        borderColor: "RGB(170, 255, 10)",
        borderWidth: 1,
      },
    ],
  },
  brand3: {
    labels: ["Cleaning", "Service", "Safety", "Quality", "Food taste"],
    datasets: [
      {
        label: "Brand 3",
        data: [6, 3, 7, 5, 8],
        backgroundColor: "rgba(100, 255, 132, 0.2)",
        borderColor: "rgba(100, 255, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  select: {
    labels: ["Cleaning", "Service", "Safety", "Quality", "Food taste"],
  },
  datasets: [{}],
};

const dataMap = new Map();
dataMap.set("Brand 1", data.brand1);
dataMap.set("Brand 2", data.brand2);
dataMap.set("Brand 3", data.brand3);
dataMap.set("Select Brand", false);

function ChartCard({ brand }) {
  const data = dataMap.get(brand);
  console.log(data);
  return (
    <>
      {data && (
        <div className={"w-full flex justify-center"}>
          <div className='block max-w-sm p-6 w-full bg-[#fff8ed8c] rounded hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <h5 className=' text-xl tracking-tight text-gray-900 font-semibold dark:text-white'>
              Sentiment By Aspect
            </h5>
            <p className='text-xs text-gray-400 dark:text-gray-400'>
              Average sentiment by aspect
            </p>
            {/* chart */}
            <Radar data={data} />
          </div>
        </div>
      )}
    </>
  );
}

export default ChartCard;

// const dataRadar = {
//     labels: [
//       "Eating",
//       "Drinking",
//       "Sleeping",
//       "Designing",
//       "Coding",
//       "Cycling",
//       "Running",
//     ],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [65, 59, 90, 81, 56, 55, 40],
//         fill: true,
//         backgroundColor: "rgba(133, 105, 241, 0.2)",
//         borderColor: "rgb(133, 105, 241)",
//         pointBackgroundColor: "rgb(133, 105, 241)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgb(133, 105, 241)",
//       },
//       {
//         label: "My Second Dataset",
//         data: [28, 48, 40, 19, 96, 27, 100],
//         fill: true,
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         borderColor: "rgb(54, 162, 235)",
//         pointBackgroundColor: "rgb(54, 162, 235)",
//         pointBorderColor: "#fff",
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: "rgb(54, 162, 235)",
//       },
//     ],
//   };
