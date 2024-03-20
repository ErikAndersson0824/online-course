import NewsList from './NewsList';
import { Container, Tabs, Tab, Grid } from '@mui/material';

function NewsListPage() {
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
            <NewsList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NewsListPage;
