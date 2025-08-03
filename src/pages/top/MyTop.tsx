import { Grid } from "@mui/material";
import MainPhoto from "./main_photo/MainPhoto";
import { LineChartHealth } from "@/components/molecules/LineChartHealth";
import { data } from "./MyTop.state";

const MyTop = () => {
  return (
    <Grid container size={12}>
      <Grid size={4}>
        <MainPhoto />
      </Grid>
      <Grid size={8}>
        <LineChartHealth data={data} />
      </Grid>
    </Grid>
  );
};

export default MyTop;
