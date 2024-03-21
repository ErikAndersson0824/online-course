import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import { useState, SyntheticEvent } from 'react';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Tab,
  Tabs,
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function Forms() {
  const [currency, setCurrency] = useState('EUR');
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <Typography variant="h3" component="h3" gutterBottom>
          <Button variant="contained" color="primary" size="large">
            Add News
          </Button>
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
                <Box sx={{ width: '100%' }}>
                  <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                    value={value}
                    onChange={handleTabChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="English" {...a11yProps(0)} />
                    <Tab label="Swedish" {...a11yProps(1)} />
                  </Tabs>
                  <TabPanel value={value} index={0}>
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
                        <CardHeader title="News Title" />
                        <TextField
                          fullWidth
                          id="news-title"
                          label="Enter News Title"
                          type="search"
                        />
                      </div>
                      <div>
                        <CardHeader title="Short Description" />
                        <TextField
                          fullWidth
                          id="news-title"
                          label="Enter Short Description"
                          type="search"
                        />
                      </div>
                      <div>
                        <CardHeader title="Content" />
                        <Quill placeholderValue="Hello world!" />
                      </div>
                      <div>
                        <CardHeader title="Search For Slug" />
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
                          style={{
                            border: '1px solid grey',
                            borderRadius: '7px'
                          }}
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
                  </TabPanel>
                  <TabPanel value={value} index={1}>
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
                        <CardHeader title="News Title" />
                        <TextField
                          fullWidth
                          id="news-title"
                          label="Enter News Title"
                          type="search"
                        />
                      </div>
                      <div>
                        <CardHeader title="Short Description" />
                        <TextField
                          fullWidth
                          id="news-title"
                          label="Enter Short Description"
                          type="search"
                        />
                      </div>
                      <div>
                        <CardHeader title="Content" />
                        <Quill placeholderValue="Hello world!" />
                      </div>
                      <div>
                        <CardHeader title="Search For Slug" />
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
                          style={{
                            border: '1px solid grey',
                            borderRadius: '7px'
                          }}
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
                  </TabPanel>
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
