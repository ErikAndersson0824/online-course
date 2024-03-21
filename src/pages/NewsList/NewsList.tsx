import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import Block from 'src/components/Block/Block';
import DataTable from 'src/components/DataTable/DataTable';
import { tableData } from 'src/components/DataTable/TableData';
import Button from '@mui/material/Button';
import { Link, NavLink, Navigate } from 'react-router-dom';
import Icon from 'src/components/Icon/Icon';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  iconClass: {
    color: 'black'
  }
});

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
    cell: (row) => {
      const classes = useStyles();
      return (
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
            <NavLink to="/news/list">
              <Icon className={classes.iconClass} name="check-thick"></Icon>
            </NavLink>
          </div>
          <div style={{ display: 'flex' }}>
            <NavLink to="/news/list">
              <Icon className={classes.iconClass} name="edit-alt"></Icon>
            </NavLink>
          </div>
          <div style={{ display: 'flex' }}>
            <NavLink to="/news/list">
              <Icon className={classes.iconClass} name="file-remove"></Icon>
            </NavLink>
          </div>
        </div>
      );
    },
    sortable: false
  }
];

function NewsList() {
  return (
    <>
      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <NavLink to="/news-add" style={{ textDecoration: 'none' }}>
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
