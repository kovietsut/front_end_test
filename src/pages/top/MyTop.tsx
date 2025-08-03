import { Grid } from "@mui/material";
import { LineChartHealth } from "@/components/molecules/LineChartHealth";
import { data } from "./MyTop.state";
import { HexShape } from "./hex_shape/HexShape";
import SVGIconify from "@/components/atoms/SvgIconify";
import MainPhoto from "./main_photo/MainPhoto";
import useStyle from "./MyTop.styles";
import Schedule from "./schedule/Schedule";

const MyTop = () => {
  const styles = useStyle();

  return (
    <>
      <Grid container size={12}>
        <Grid size={4}>
          <MainPhoto />
        </Grid>
        <Grid size={8}>
          <LineChartHealth data={data} />
        </Grid>
      </Grid>
      <Grid container size={12} sx={styles.hexShapeContainer} spacing={3}>
        <HexShape icon={<SVGIconify name="IconKnife" />} label="Morning" />
        <HexShape icon={<SVGIconify name="IconKnife" />} label="Lunch" />
        <HexShape icon={<SVGIconify name="IconKnife" />} label="Dinner" />
        <HexShape icon={<SVGIconify name="IconCup" />} label="Snack" />
      </Grid>
      <Grid container size={12} sx={styles.scheduleContainer} spacing={3}>
        <Schedule imageUrl="/src/assets/d01.svg" time="05.21.Morning" />
        <Schedule imageUrl="/src/assets/l01.svg" time="05.21.Lunch" />
        <Schedule imageUrl="/src/assets/l03.svg" time="05.21.Dinner" />
        <Schedule imageUrl="/src/assets/d02.svg" time="05.21.Snack" />
      </Grid>
      <Grid
        container
        size={12}
        sx={{ ...styles.scheduleContainer, marginTop: "10px" }}
        spacing={3}
      >
        <Schedule imageUrl="/src/assets/m01.svg" time="05.20.Morning" />
        <Schedule imageUrl="/src/assets/d01.svg" time="05.20.Lunch" />
        <Schedule imageUrl="/src/assets/m01.svg" time="05.20.Dinner" />
        <Schedule imageUrl="/src/assets/s01.svg" time="05.21.Snack" />
      </Grid>
    </>
  );
};

export default MyTop;
