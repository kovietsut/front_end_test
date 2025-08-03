import { Box, Button, Typography, Stack } from "@mui/material";
import useStyle from "./Error.styles";

const Error401Page = () => {
  const styles = useStyle();
  return (
    <Box sx={styles.errorContainer}>
      <Box sx={styles.errorContentBox}>
        <Typography variant="h1" sx={styles.errorCode}>
          401
        </Typography>
        <Typography variant="h2" sx={styles.errorHeading}>
          認証が必要です
        </Typography>
        <Typography sx={styles.errorDescription}>
          このページにアクセスするには、ログインが必要です。
          <br />
          適切な認証情報を使用してログインしてください。
        </Typography>
        <Button
          href="/auth/login"
          variant="contained"
          sx={styles.primaryButton}
        >
          ログインページへ
        </Button>
        <Typography sx={styles.detailsButtonContainer}>
          <Button sx={styles.detailsButton}>詳細情報を表示</Button>
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={styles.navigationStack}
        >
          <Button href="/" variant="outlined" sx={styles.navigationButton}>
            ホームページに戻る
          </Button>
          <Button
            href="/auth/register"
            variant="outlined"
            sx={styles.navigationButton}
          >
            新規登録
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Error401Page;
