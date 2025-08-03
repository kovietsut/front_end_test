import { Grid } from "@mui/material";
import { LineChartHealth } from "@/components/molecules/LineChartHealth";
import { data } from "./MyTop.state";
import { HexShape } from "./hex_shape/HexShape";
import SVGIconify from "@/components/atoms/SvgIconify";
import MainPhoto from "./main_photo/MainPhoto";
import useStyle from "./MyTop.styles";

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
      <Grid container size={12} sx={styles.hexShapeContainer}>
        <HexShape icon={<SVGIconify name="IconKnife" />} label="Morning" />
        <HexShape icon={<SVGIconify name="IconKnife" />} label="Lunch" />
        <HexShape icon={<SVGIconify name="IconKnife" />} label="Dinner" />
        <HexShape icon={<SVGIconify name="IconCup" />} label="Snack" />
      </Grid>
    </>
  );
};

export default MyTop;
