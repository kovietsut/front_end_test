import { Box, Button, Typography, Grid, Container } from "@mui/material";
import useStyle from "./Error.styles";
import useResponsive from "@/hooks/useResponsive";

const Error401Page = () => {
  const styles = useStyle();
  const isMobile = useResponsive("down", "sm");
  const isTablet = useResponsive("between", "sm", "md");

  return (
    <Box sx={styles.errorContainer}>
      <Container maxWidth="lg" sx={styles.errorContentBox}>
        <Grid
          container
          spacing={isMobile ? 2 : 3}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
            <Typography
              variant={isMobile ? "h2" : "h1"}
              sx={{
                ...styles.errorCode,
                fontSize: isMobile ? "3rem" : isTablet ? "3.5rem" : "4rem",
                marginBottom: isMobile ? "0.5rem" : "1rem",
              }}
            >
              401
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              sx={{
                ...styles.errorHeading,
                fontSize: isMobile ? "1.2rem" : isTablet ? "1.3rem" : "1.5rem",
                marginBottom: isMobile ? "0.5rem" : "1rem",
              }}
            >
              アクセス権限がありません
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
            <Typography
              sx={{
                ...styles.errorDescription,
                fontSize: isMobile ? "0.9rem" : "1rem",
                marginBottom: isMobile ? "1.5rem" : "2rem",
                padding: isMobile ? "0 10px" : "0",
              }}
            >
              このページにアクセスするには認証が必要です。
              {!isMobile && <br />}
              ログインしてから再度アクセスしてください。
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
            <Button
              href="/login"
              variant="contained"
              sx={{
                ...styles.primaryButton,
                fontSize: isMobile ? "1rem" : "1.1rem",
                padding: isMobile ? "10px 24px" : "12px 32px",
                width: isMobile ? "100%" : "auto",
                minWidth: isMobile ? "200px" : "auto",
              }}
            >
              ログインページへ
            </Button>
          </Grid>

          <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
            <Box sx={styles.detailsButtonContainer}>
              <Button
                sx={{
                  ...styles.detailsButton,
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                }}
              >
                詳細情報を表示
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Error401Page;
