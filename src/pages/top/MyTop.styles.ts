import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    hexShapeContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginTop: "30px",
      marginBottom: "40px",
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    scheduleContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  };
};

export default useStyle;
