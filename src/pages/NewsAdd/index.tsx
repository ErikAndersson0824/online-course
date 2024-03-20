import NewsAdd from './NewsAdd';
import { Container, Tabs, Tab, Grid } from '@mui/material';

function NewsAddPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={9}
        >
          <Grid item xs={12}>
            <NewsAdd />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NewsAddPage;
