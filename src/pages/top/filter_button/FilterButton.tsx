import { Button, CircularProgress } from "@mui/material";
import useStyle from "./FilterButton.styles";

type Props = {
  label?: string;
  onClick?: () => void;
  loading?: boolean;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
};

export const FilterButton = ({
  label = "記録をもっと見る",
  onClick,
  loading = false,
  variant = "contained",
  color = "primary",
  disabled = false,
}: Props) => {
  const styles = useStyle();

  return (
    <Button
      onClick={onClick}
      sx={styles.button}
      variant={variant}
      color={color}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={16} /> : undefined}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
