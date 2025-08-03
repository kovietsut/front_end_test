import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    errorContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      boxSizing: "border-box",
      "@media (max-width: 600px)": {
        padding: "10px",
        alignItems: "flex-start",
        paddingTop: "15vh",
      },
      "@media (min-width: 601px) and (max-width: 1024px)": {
        alignItems: "flex-start",
        paddingTop: "10vh",
      },
    },
    errorContentBox: {
      maxWidth: "600px",
      padding: "0 20px",
      width: "100%",
      "@media (max-width: 600px)": {
        padding: "0 10px",
        maxWidth: "100%",
      },
      "@media (min-width: 601px) and (max-width: 960px)": {
        maxWidth: "500px",
      },
    },
    errorCode: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "1rem",
      "@media (max-width: 600px)": {
        fontSize: "3rem",
        marginBottom: "0.5rem",
      },
      "@media (min-width: 601px) and (max-width: 960px)": {
        fontSize: "3.5rem",
      },
    },
    errorHeading: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "1rem",
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
        marginBottom: "0.5rem",
      },
      "@media (min-width: 601px) and (max-width: 960px)": {
        fontSize: "1.3rem",
      },
    },
    errorDescription: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "2rem",
      lineHeight: 1.6,
      "@media (max-width: 600px)": {
        fontSize: "0.9rem",
        marginBottom: "1.5rem",
        lineHeight: 1.5,
      },
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
      minWidth: "200px",
      "@media (max-width: 600px)": {
        fontSize: "1rem",
        padding: "10px 24px",
        width: "100%",
        minWidth: "200px",
      },
      "&:hover": {
        background: "linear-gradient(90deg, #FFC700 0%, #FF7C00 100%)",
      },
    },
    detailsButton: {
      color: "#FF8C00",
      textTransform: "none",
      fontSize: "0.9rem",
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
      "&:hover": {
        textDecoration: "underline",
      },
    },
    detailsButtonContainer: {
      marginBottom: "3rem",
      "@media (max-width: 600px)": {
        marginBottom: "2rem",
      },
    },
    navigationStack: {
      marginTop: "2rem",
      "@media (max-width: 600px)": {
        marginTop: "1.5rem",
      },
    },
    navigationButton: {
      borderColor: "#ccc",
      color: "#666",
      textTransform: "none",
      fontSize: "0.9rem",
      padding: "8px 16px",
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
        padding: "6px 12px",
      },
      "&:hover": {
        borderColor: "#999",
        backgroundColor: "#f5f5f5",
      },
    },
    errorTitle: {
      fontFamily: "'Montserrat', sans-serif",
      "@media (max-width: 600px)": {
        fontSize: "1.1rem",
      },
    },
    errorParagraph: {
      fontFamily: "'Montserrat', sans-serif",
      "@media (max-width: 600px)": {
        fontSize: "0.9rem",
      },
    },
    errorButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "14px",
      marginTop: "5vh",
      "@media (max-width: 600px)": {
        fontSize: "13px",
        marginTop: "3vh",
      },
    },
  };
};

export default useStyle;
