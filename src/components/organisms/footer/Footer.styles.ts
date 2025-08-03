import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    footer: {
      backgroundColor: "#2c2c2c",
      padding: "12px 0px",
      width: "100%",
      position: "fixed",
      bottom: 0,
      left: 0,
      zIndex: 1000,
      height: "128px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start", // Changed from center to start
    },
    container: {
      display: "flex",
      justifyContent: "flex-start", // Changed from center to start
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
      height: "100%",
    },
    linksContainer: {
      display: "flex",
      flexDirection: "row",
      gap: "32px",
      flexWrap: "nowrap",
      justifyContent: "flex-start", // Changed from center to start
      alignItems: "center",
      width: "100%",
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
      whiteSpace: "nowrap",
      padding: "8px 12px",
      borderRadius: "8px",
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        color: "#ffffff",
        textDecoration: "underline",
        backgroundColor: "rgba(255, 107, 53, 0.1)",
      },
    },
  };
};

export default useStyle;
