import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Quill from 'src/components/Form/Quill/Quill';
import FileUpload from 'src/components/Form/FileUpload';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';
import { mt } from 'date-fns/locale';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

function Forms() {
  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = useState(30);

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <Typography variant="h3" component="h3" gutterBottom>
          Add News
        </Typography>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { width: '100%', mb: 5 },
                    '& .ql-container': { mb: 5 }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <CardHeader title="News Title(English)" />
                    <TextField
                      fullWidth
                      id="news-title"
                      label="Enter News Title"
                      type="search"
                    />
                  </div>
                  <div>
                    <CardHeader title="Short Description (English)" />
                    <TextField
                      fullWidth
                      id="news-title"
                      label="Enter Short Description"
                      type="search"
                    />
                  </div>
                  <div>
                    <CardHeader title="Content (English)" />
                    <Quill placeholderValue="Hello world!" />
                  </div>
                  <div>
                    <CardHeader title="Search For Slug (English)" />
                    <TextField
                      fullWidth
                      id="news-title"
                      label="Enter Sly"
                      type="search"
                    />
                  </div>
                  <div>
                    <CardHeader title="News Title (Swedish)" />
                    <TextField
                      fullWidth
                      id="news-title"
                      label="Enter News Title"
                      type="search"
                    />
                  </div>
                  <div>
                    <CardHeader title="Short Description (Swedish)" />
                    <TextField
                      fullWidth
                      id="news-title"
                      label="Enter Short Description"
                      type="search"
                    />
                  </div>
                  <div>
                    <CardHeader title="Content (Swedish)" />
                    <Quill placeholderValue="Hello world!" />
                  </div>
                  <div>
                    <CardHeader title="Search For Slug (Swedish)" />
                    <TextField
                      fullWidth
                      id="news-title"
                      label="Enter Sly"
                      type="search"
                    />
                  </div>
                  <div>
                    <CardHeader title="Picture" />
                    <div
                      style={{ border: '1px solid grey', borderRadius: '7px' }}
                    >
                      <FileUpload iconName="files" />
                    </div>
                  </div>
                  <div style={{ marginTop: '40px' }}>
                    <Button
                      sx={{ margin: '.625rem' }}
                      variant="contained"
                      color="success"
                    >
                      Save
                    </Button>
                    <Button
                      sx={{ margin: '.625rem' }}
                      variant="contained"
                      color="primary"
                    >
                      Cancel
                    </Button>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Forms;
