import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    hexShapeContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      marginTop: "20px",
    },
  };
};

export default useStyle;
