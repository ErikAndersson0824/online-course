import React from 'react';
import { Card } from 'react-bootstrap';
import Block from 'src/components/Block/Block';
import DataTable from 'src/components/DataTable/DataTable';
import { tableData, tableColumns } from 'src/components/DataTable/TableData';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NewsList() {
  return (
    <>
      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Link to="/news/add" style={{ textDecoration: 'none' }}>
              <Button sx={{ margin: 1 }} variant="contained" color="primary">
                Add New One
              </Button>
            </Link>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <DataTable
            tableClassName="data-table-head-light table-responsive"
            data={tableData}
            columns={tableColumns}
            expandableRows
          />
        </Card>
      </Block>
    </>
  );
}

export default NewsList;
