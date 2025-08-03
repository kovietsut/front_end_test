import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import Iconify from "@/components/atoms/Iconify";
import useStyle from "./HexShape.styles";

interface HexShapeProps {
  icon: string | ReactNode;
  label: string;
}

export const HexShape = ({ icon, label }: HexShapeProps) => {
  const styles = useStyle();

  const renderIcon = () => {
    if (typeof icon === "string") {
      return <Iconify icon={icon} sx={styles.icon} />;
    }
    return <Box sx={styles.icon}>{icon}</Box>;
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.hexagon} />
      <Box sx={styles.content}>
        {renderIcon()}
        <Typography sx={styles.label}>{label}</Typography>
      </Box>
    </Box>
  );
};
