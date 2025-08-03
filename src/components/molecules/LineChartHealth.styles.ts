import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    responsiveContainer: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    lineChart: {
      backgroundColor: "#2e2e2e",
    },
    tooltip: {
      backgroundColor: "#000000",
      border: "1px solid #333333",
      color: "#FFFFFF",
    },
  };
};

export default useStyle;
