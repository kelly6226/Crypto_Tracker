import { useQuery } from "react-query";
import ApexCharts from "react-apexcharts";
import type { PriceData } from "./Coin";

interface ChartProps {
  coinId: string;
}

function Price({ coinId }: ChartProps) {
  return <h1>Price</h1>;
}

export default Price;
