import { Box, Typography } from "@mui/material";
import Iconify from "@/components/atoms/Iconify";
import useStyle from "./Appbar.styles";
import SVGIconify from "@/components/atoms/SvgIconify";

export const Appbar = () => {
  const styles = useStyle();

  return (
    <Box sx={styles.appbar}>
      <Box sx={styles.container}>
        <Box sx={styles.logo}>
          <Box sx={styles.logoImage}>
            <SVGIconify name="IconLogo" />
          </Box>
        </Box>
        <Box sx={styles.navItems}>
          <Box sx={styles.navItemActive}>
            <Iconify icon="mdi:file-document-edit" sx={styles.icon} />
            <Typography sx={styles.navTextActive}>自分の記録</Typography>
          </Box>
          <Box sx={styles.navItem}>
            <Iconify icon="mdi:trophy" sx={styles.icon} />
            <Typography sx={styles.navText}>チャレンジ</Typography>
          </Box>
          <Box sx={styles.navItem}>
            <Box sx={styles.notificationBadge}>
              <Iconify icon="mdi:information" sx={styles.icon} />
              <Box sx={styles.badge}>1</Box>
            </Box>
            <Typography sx={styles.navText}>お知らせ</Typography>
          </Box>
        </Box>
        <Box sx={styles.hamburgerMenu}>
          <Iconify icon="mdi:menu" sx={styles.icon} />
        </Box>
      </Box>
    </Box>
  );
};
