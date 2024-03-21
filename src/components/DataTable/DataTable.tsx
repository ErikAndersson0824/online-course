import React, {
  useEffect,
  useState,
  ForwardedRef,
  forwardRef,
  HTMLProps
} from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import DataTable from 'react-data-table-component';
import exportFromJSON from 'export-from-json';
import { Button } from 'react-bootstrap';

import DataTablePagination from '../Pagination/DataTablePagination';
import TextField from '@mui/material/TextField';

// export file component
const Export = ({ data }) => {
  const fileName = 'user-data';

  const exportCSV = () => {
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  const exportExcel = () => {
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div className="export-options d-flex align-items-center me-2">
      <div className="export-title small me-2">Export</div>
      <div className="btn-group">
        <Button variant="outline-light" onClick={() => exportCSV()}>
          CSV
        </Button>
        <Button variant="outline-light" onClick={() => exportExcel()}>
          Excel
        </Button>
      </div>
    </div>
  );
};

// expanded component in mobile view
const expandedComponent = ({ data }) => {
  return (
    <ul className="data-details p-3 gap gy-1 border-bottom small">
      <li>
        <span className="data-title text-base fw-medium me-2">Name:</span>
        <span className="data-text text-light">{data.name}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Age:</span>
        <span className="data-text text-light">{data.age}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Position:</span>
        <span className="data-text text-light">{data.position}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Company:</span>
        <span className="data-text text-light">{data.company}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Start Date:</span>
        <span className="data-text text-light">{data.startDate}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Salary:</span>
        <span className="data-text text-light">{data.salary}</span>
      </li>
    </ul>
  );
};

// custom checkbox

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  onClick?: () => void;
}

const CustomCheckbox = forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div className="form-check" id={props.name}>
      <input
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={props.onClick}
        {...props}
      />
    </div>
  )
);
interface DataTableProps {
  data?: any;
  columns?: any;
  className?: string;
  expandableRows?: boolean;
  actions?: any;
  tableClassName?: string;
  selectableRows?: any;
  // Add any other props if needed
}

const DataTableComponent: React.FC<DataTableProps> = ({
  data,
  columns,
  className,
  expandableRows,
  actions,
  tableClassName,
  selectableRows,
  ...props
}) => {
  const [tableData, setTableData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [showItemPerPage, setShowItemPerPage] = useState(10);
  const [mobileView, setMobileView] = useState(false);

  // filter items by name
  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.newsTitle.toLowerCase().includes(searchText.toLowerCase())
    );

    setTableData(filteredData);
  }, [searchText]);

  // function to change the table design view to expanable under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 960 && expandableRows) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('load', viewChange);
    window.addEventListener('resize', viewChange);
    return () => {
      window.removeEventListener('resize', viewChange);
    };
  }, []);

  return (
    <div className="data-table-wrapper">
      <div className="data-table-top">
        <div className="data-table-search">
          <TextField
            className="form-control"
            id="outlined-basic"
            label="Search by name"
            variant="outlined"
            type="search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="data-table-action-wrap">
          {actions && <Export data={data} />}
          <div className="data-table-select">
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label">Per Page</InputLabel>
              <Select
                displayEmpty
                value={showItemPerPage}
                onChange={(e) => setShowItemPerPage(Number(e.target.value))}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={tableData}
        className={tableClassName}
        noDataComponent={<div className="p-2">There are no records found.</div>}
        sortIcon={<div className="data-table-sorter"></div>}
        pagination
        expandableRowsComponent={expandedComponent}
        expandableRows={mobileView}
        selectableRows={selectableRows}
        selectableRowsComponent={CustomCheckbox}
        paginationComponent={({
          rowsPerPage,
          rowCount,
          onChangePage,
          onChangeRowsPerPage,
          currentPage
        }) => (
          <div className="data-table-bottom">
            <DataTablePagination
              showItemPerPage={showItemPerPage}
              itemPerPage={rowsPerPage}
              totalItems={rowCount}
              paginate={onChangePage}
              currentPage={currentPage}
              onChangeRowsPerPage={onChangeRowsPerPage}
              setShowItemPerPage={setShowItemPerPage}
            />
          </div>
        )}
      />
    </div>
  );
};

export default DataTableComponent;
