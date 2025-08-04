import type { SxProps, Theme } from "@mui/material";

const useStyle = (): {
  container: SxProps<Theme>;
  buttonContainer: SxProps<Theme>;
} => ({
  container: {
    marginTop: 3,
    marginBottom: 2,
  },
  buttonContainer: {
    justifyContent: "center",
  },
});

export default useStyle;
