import { Box, Typography } from "@mui/material";
import useStyle from "./Schedule.styles";

type Props = {
  imageUrl?: string;
  className?: string;
  time?: string;
};

const Schedule = ({ imageUrl, className, time }: Props) => {
  const styles = useStyle();

  return (
    <Box sx={styles.container} className={className}>
      <Box sx={styles.maskingShape} />
      <Box
        sx={{
          ...styles.imageContainer,
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        }}
      />
      {time && <Typography sx={styles.timeDisplay}>{time}</Typography>}
    </Box>
  );
};

export default Schedule;
