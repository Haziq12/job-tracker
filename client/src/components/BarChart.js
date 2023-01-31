import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({ data }) => {
  <ResponsiveContainer width='100%' height={300}>
    <BarChart data={data} margin={{top:50}}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey={}/>
    </BarChart>
  </ResponsiveContainer>
}

export default BarChartComponent 