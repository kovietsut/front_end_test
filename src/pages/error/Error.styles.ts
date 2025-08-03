import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    errorContainer: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    errorContentBox: {
      maxWidth: "600px",
      padding: "0 20px",
    },
    errorCode: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "1rem",
    },
    errorHeading: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "1rem",
    },
    errorDescription: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "2rem",
      lineHeight: 1.6,
    },
    primaryButton: {
      background: "linear-gradient(90deg, #FFD700 0%, #FF8C00 100%)",
      color: "#333",
      fontSize: "1.1rem",
      fontWeight: "600",
      padding: "12px 32px",
      borderRadius: "8px",
      textTransform: "none",
      marginBottom: "1rem",
      "&:hover": {
        background: "linear-gradient(90deg, #FFC700 0%, #FF7C00 100%)",
      },
    },
    detailsButton: {
      color: "#FF8C00",
      textTransform: "none",
      fontSize: "0.9rem",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    detailsButtonContainer: {
      marginBottom: "3rem",
    },
    navigationStack: {
      marginTop: "2rem",
    },
    navigationButton: {
      borderColor: "#ccc",
      color: "#666",
      textTransform: "none",
      fontSize: "0.9rem",
      padding: "8px 16px",
      "&:hover": {
        borderColor: "#999",
        backgroundColor: "#f5f5f5",
      },
    },
    errorTitle: {
      fontFamily: "'Montserrat', sans-serif",
    },
    errorParagraph: {
      fontFamily: "'Montserrat', sans-serif",
    },
    errorButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "14px",
      marginTop: "5vh",
    },
  };
};

export default useStyle;
