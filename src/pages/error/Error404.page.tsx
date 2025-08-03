import { Box, Button, Typography, Stack } from "@mui/material";
import useStyle from "./Error.styles";

const Error404Page: React.FC = () => {
  const styles = useStyle();
  return (
    <Box sx={styles.errorContainer}>
      <Box sx={styles.errorContentBox}>
        <Typography variant="h1" sx={styles.errorCode}>
          404
        </Typography>
        <Typography variant="h2" sx={styles.errorHeading}>
          ページが見つかりません
        </Typography>
        <Typography sx={styles.errorDescription}>
          お探しのページは存在しないか、移動された可能性があります。
          <br />
          URLをご確認いただくか、以下のリンクからお進みください。
        </Typography>
        <Button href="/" variant="contained" sx={styles.primaryButton}>
          ホームページへ
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
          <Button
            onClick={() => window.history.back()}
            variant="outlined"
            sx={styles.navigationButton}
          >
            前のページに戻る
          </Button>
          <Button
            href="/auth/login"
            variant="outlined"
            sx={styles.navigationButton}
          >
            ログインページ
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Error404Page;
