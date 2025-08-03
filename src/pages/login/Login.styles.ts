import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      overflowY: "auto",
      "& .MuiStack-root": {
        minWidth: {
          xs: "100vw",
          sm: 400,
        },
      },
    },
  };
};

export default useStyle;
