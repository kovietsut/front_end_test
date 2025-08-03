import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    outletContainer: {
      overflow: "auto",
      marginTop: "64px",
      marginBottom: "128px",
    },
  };
};

export default useStyle;
