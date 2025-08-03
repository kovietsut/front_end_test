import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    appbar: {
      backgroundColor: "#414141",
      padding: "12px 16px",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    logo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      cursor: "pointer",
    },
    logoImage: {
      height: "40px",
      width: "auto",
    },
    logoText: {
      color: "#ff6b35",
      fontSize: "20px",
      fontWeight: 700,
      margin: 0,
    },
    logoUnderline: {
      width: "100%",
      height: "2px",
      backgroundColor: "#ff6b35",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "8px",
        height: "8px",
        backgroundColor: "#ff6b35",
        borderRadius: "50%",
        transform: "translateY(3px)",
      },
    },
    navItems: {
      display: "flex",
      alignItems: "center",
      gap: "32px",
    },
    navItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      padding: "8px 12px",
      borderRadius: "8px",
      transition: "background-color 0.2s ease-in-out",
    },
    navItemActive: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      padding: "8px 12px",
      borderRadius: "8px",
    },
    navText: {
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 500,
    },
    navTextActive: {
      color: "#ff963c",
      fontSize: "14px",
      fontWeight: 500,
    },
    icon: {
      color: "#ff963c",
      fontSize: "20px",
    },
    notificationBadge: {
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      backgroundColor: "#ff963c",
      color: "#ffffff",
      borderRadius: "50%",
      width: "16px",
      height: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      fontWeight: 700,
    },
    hamburgerMenu: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      cursor: "pointer",
      padding: "8px",
      borderRadius: "4px",
      transition: "background-color 0.2s ease-in-out",
    },
    hamburgerLine: {
      width: "20px",
      height: "2px",
      backgroundColor: "#ff6b35",
      borderRadius: "1px",
    },
  };
};

export default useStyle;
