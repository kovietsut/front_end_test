import { Box } from "@mui/material";
import useStyle from "./MainPhoto.styles";

const MainPhoto = () => {
  const styles = useStyle();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.backgroundRectangle} />
      <Box sx={styles.imageContainer}>
        <Box
          component="img"
          src="/src/assets/main_photo.svg"
          alt="Main photo"
          sx={styles.image}
        />
      </Box>
      <Box sx={styles.gradientOverlay} />
    </Box>
  );
};

export default MainPhoto;
