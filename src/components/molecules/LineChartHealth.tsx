import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  LineChart,
} from "recharts";
import useStyle from "./LineChartHealth.styles";

type LineChartData = {
  name: string;
  a: number;
  b: number;
};

type Props = {
  data: LineChartData[];
};

export const LineChartHealth = ({ data }: Props) => {
  const styles = useStyle();

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={styles.responsiveContainer as React.CSSProperties}
    >
      <LineChart
        data={data}
        style={styles.lineChart as React.CSSProperties}
        margin={{ top: 20, right: 60, left: 30, bottom: 20 }}
      >
        <CartesianGrid stroke="#777777" horizontal={false} />
        <XAxis dataKey="name" stroke="#FFFFFF" tick={{ fontSize: 12 }} />
        <Tooltip contentStyle={styles.tooltip as React.CSSProperties} />
        <Line
          type="monotone"
          dataKey="a"
          stroke="#00E0DC"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="b"
          stroke="#FFC107"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
