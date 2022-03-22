import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
)

export const BarChart = (props: { chartData: any }) => {
  const chartData = props.chartData
  return (
    <Bar
      className="chart"
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Colors',
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      }}
    />
  )
}
