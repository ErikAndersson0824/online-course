import React from 'react';
import { Card } from 'react-bootstrap';
import Block from 'src/components/Block/Block';
import DataTable from 'src/components/DataTable/DataTable';
import { tableData, tableColumns } from 'src/components/DataTable/TableData';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function NewsList() {
  return (
    <>
      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <NavLink to="/news/add">
              <Button sx={{ margin: 1 }} variant="contained" color="primary">
                Add New One
              </Button>
            </NavLink>
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
