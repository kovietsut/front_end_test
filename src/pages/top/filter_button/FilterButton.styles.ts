import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    button: {
      background: "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
      padding: "12px 32px",
      minWidth: "200px",
      height: "48px",
      color: "#FFFFFF",
      fontSize: "16px",
      fontWeight: 600,
      fontFamily: "'Inter', sans-serif",
      textTransform: "none",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      display: "block",
      margin: "40px auto 0 auto",
      "&:hover": {
        background: "linear-gradient(90deg, #FFE44D 0%, #FFB84D 100%)",
        transform: "translateY(-1px)",
      },
      "&:active": {
        transform: "translateY(0px)",
      },
    },
  };
};

export default useStyle;
