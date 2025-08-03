import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    container: {
      position: "relative",
      width: "120px",
      height: "120px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    hexagon: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(180deg, #FFD700 0%, #FF8C00 100%)",
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      zIndex: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      padding: "16px",
    },
    icon: {
      width: "40px",
      height: "40px",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        width: "100%",
        height: "100%",
        filter: "brightness(0) invert(1)", // Makes the icon white
      },
    },
    label: {
      color: "#FFFFFF",
      fontSize: "14px",
      fontWeight: 600,
      textAlign: "center",
      lineHeight: 1.2,
      fontFamily: "'Inter', sans-serif",
      textShadow: "0 1px 2px rgba(0,0,0,0.1)",
    },
  };
};

export default useStyle;
