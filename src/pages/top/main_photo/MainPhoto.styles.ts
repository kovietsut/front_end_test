import type { TStyle } from "@/interfaces/common/styles";

const useStyle = (): TStyle => {
  return {
    container: {
      position: "relative",
      height: "312px",
      overflow: "hidden",
    },
    backgroundRectangle: {
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
      zIndex: 2,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
    gradientOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(135deg, rgba(255, 204, 33, 1) 0%, rgba(255, 150, 60, 1) 100%)",
      mixBlendMode: "soft-light",
      zIndex: 3,
    },
  };
};

export default useStyle;
