import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    container: {
      position: "relative",
      width: "234px",
      height: "234px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    maskingShape: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#000000",
      zIndex: 1,
    },
    imageContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: 2,
    },
    timeDisplay: {
      position: "absolute",
      bottom: "0px",
      left: "0px",
      backgroundColor: "#ffcc21",
      color: "#ffffff",
      padding: "4px 8px",
      fontSize: "12px",
      fontWeight: "bold",
      zIndex: 3,
      fontFamily: "Arial, sans-serif",
    },
  };
};

export default useStyle;
