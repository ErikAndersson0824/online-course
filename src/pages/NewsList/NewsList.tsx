import React from 'react';
import { Card } from 'react-bootstrap';
import Block from 'src/components/Block/Block';
import DataTable from 'src/components/DataTable/DataTable';
import { tableData } from 'src/components/DataTable/TableData';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import Icon from 'src/components/Icon/Icon';

export const newsTitleColumns = [
  {
    name: 'No',
    grow: 1,
    selector: (row) => row.id + 1,
    sortable: true
  },
  {
    name: 'News Title(English)',
    grow: 5,
    selector: (row) => row.newsTitle,
    sortable: true
  },
  {
    name: 'Action',
    grow: 1,
    cell: (row) => (
      <div
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          display: 'flex',
          width: '100%',
          padding: '0 15px 0 25px'
        }}
      >
        <div style={{ display: 'flex' }}>
          <Icon name="check-thick"></Icon>
        </div>
        <div style={{ display: 'flex' }}>
          <Icon name="edit-alt"></Icon>
        </div>
        <div style={{ display: 'flex' }}>
          <Icon name="file-remove"></Icon>
        </div>
      </div>
    ),
    sortable: false
  }
];

function NewsList() {
  return (
    <>
      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <NavLink to="/news/add" style={{ textDecoration: 'none' }}>
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
            columns={newsTitleColumns}
            expandableRows
          />
        </Card>
      </Block>
    </>
  );
}

export default NewsList;
