import { Grid, Box } from "@mui/material";
import FilterButton from "../filter_button/FilterButton";
import useStyle from "./FilterButtons.styles";

type Props = {
  onFilterChange: (mealType: string) => void;
  currentFilter: string;
  loading: boolean;
};

const FilterButtons = ({ onFilterChange, currentFilter, loading }: Props) => {
  const styles = useStyle();

  const mealTypes = [
    { label: "Morning", value: "Morning" },
    { label: "Lunch", value: "Lunch" },
    { label: "Dinner", value: "Dinner" },
    { label: "Snack", value: "Snack" },
  ];

  return (
    <Box sx={styles.container}>
      <Grid container size={12} sx={styles.buttonContainer} spacing={2}>
        {mealTypes.map((mealType) => (
          <Grid key={mealType.value} size={3}>
            <FilterButton
              label={mealType.label}
              onClick={() => onFilterChange(mealType.value)}
              loading={loading}
              variant={
                currentFilter === mealType.value ? "contained" : "outlined"
              }
              color={currentFilter === mealType.value ? "primary" : "default"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilterButtons;
