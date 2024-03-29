import { Button } from '@mui/material';

export const tableColumns = [
  {
    name: 'No',
    selector: (row) => row.id + 1,
    sortable: true
  },
  {
    name: 'News Title(English)',
    selector: (row) => row.newsTitle,
    sortable: true
  },
  {
    name: 'Action',
    selector: (row) => {
      return <></>;
    },
    sortable: true
  }
];

export const tableData = [
  {
    id: 0,
    newsTitle: 'Francine Kirby',
    age: 24,
    position: 'System Architect',
    company: 'BUZZWORKS',
    startDate: '2017-02-17',
    salary: '$2,570.39'
  },
  {
    id: 1,
    newsTitle: 'Reva Best',
    age: 40,
    position: 'Accountant',
    company: 'MARQET',
    startDate: '2021-10-14',
    salary: '$1,488.76'
  },
  {
    id: 2,
    newsTitle: 'Alexis Flores',
    age: 21,
    position: 'Junior Technical Author',
    company: 'OBONES',
    startDate: '2020-04-28',
    salary: '$1,336.93'
  },
  {
    id: 3,
    newsTitle: 'Nixon Sullivan',
    age: 30,
    position: 'Senior Javascript Developer',
    company: 'SLUMBERIA',
    startDate: '2016-10-08',
    salary: '$2,156.70'
  },
  {
    id: 4,
    newsTitle: 'Foreman Wooten',
    age: 20,
    position: 'Accountant',
    company: 'ESCENTA',
    startDate: '2018-07-12',
    salary: '$3,057.42'
  },
  {
    id: 5,
    newsTitle: 'Franco Davis',
    age: 28,
    position: 'Integration Specialist',
    company: 'ZILLACON',
    startDate: '2015-10-08',
    salary: '$2,730.88'
  },
  {
    id: 6,
    newsTitle: 'Bullock Kline',
    age: 32,
    position: 'Sales Assistant',
    company: 'SAVVY',
    startDate: '2017-07-03',
    salary: '$2,986.05'
  },
  {
    id: 7,
    newsTitle: 'Baird Coffey',
    age: 36,
    position: 'Integration Specialist',
    company: 'BLEENDOT',
    startDate: '2014-01-27',
    salary: '$2,755.80'
  },
  {
    id: 8,
    newsTitle: 'Eula Walters',
    age: 40,
    position: 'Integration Specialist',
    company: 'UXMOX',
    startDate: '2020-09-19',
    salary: '$3,302.75'
  },
  {
    id: 9,
    newsTitle: 'Gaines Moss',
    age: 26,
    position: 'Javascript Developer',
    company: 'INCUBUS',
    startDate: '2017-10-13',
    salary: '$3,856.24'
  },
  {
    id: 10,
    newsTitle: 'Sargent Winters',
    age: 28,
    position: 'Software Engineer',
    company: 'AUSTEX',
    startDate: '2020-12-26',
    salary: '$3,668.64'
  },
  {
    id: 11,
    newsTitle: 'Sybil Patton',
    age: 35,
    position: 'Office Manager',
    company: 'ZILIDIUM',
    startDate: '2020-06-19',
    salary: '$1,987.14'
  },
  {
    id: 12,
    newsTitle: 'Henderson Elliott',
    age: 39,
    position: 'Software Engineer',
    company: 'ZOARERE',
    startDate: '2016-08-16',
    salary: '$1,795.31'
  },
  {
    id: 13,
    newsTitle: 'Combs Irwin',
    age: 33,
    position: 'Office Manager',
    company: 'COLAIRE',
    startDate: '2017-07-19',
    salary: '$2,396.73'
  },
  {
    id: 14,
    newsTitle: 'Fleming Buchanan',
    age: 33,
    position: 'Office Manager',
    company: 'WEBIOTIC',
    startDate: '2021-09-12',
    salary: '$3,406.96'
  },
  {
    id: 15,
    newsTitle: 'Mcbride Dixon',
    age: 25,
    position: 'Office Manager',
    company: 'ZBOO',
    startDate: '2017-12-08',
    salary: '$1,065.32'
  },
  {
    id: 16,
    newsTitle: 'Nettie Greer',
    age: 32,
    position: 'Office Manager',
    company: 'QUONK',
    startDate: '2014-03-15',
    salary: '$1,558.83'
  },
  {
    id: 17,
    newsTitle: 'Anita Saunders',
    age: 39,
    position: 'Office Manager',
    company: 'IDEALIS',
    startDate: '2015-07-31',
    salary: '$1,848.84'
  },
  {
    id: 18,
    newsTitle: 'Darcy Mcclain',
    age: 24,
    position: 'Software Engineer',
    company: 'DIGIGEN',
    startDate: '2020-02-19',
    salary: '$3,382.78'
  },
  {
    id: 19,
    newsTitle: 'Jodi Knowles',
    age: 32,
    position: 'Software Engineer',
    company: 'KONGENE',
    startDate: '2014-03-09',
    salary: '$1,668.05'
  },
  {
    id: 20,
    newsTitle: 'Cathleen Schroeder',
    age: 21,
    position: 'Software Engineer',
    company: 'TROPOLIS',
    startDate: '2014-09-28',
    salary: '$2,730.21'
  },
  {
    id: 21,
    newsTitle: 'Lea Fitzgerald',
    age: 24,
    position: 'Software Engineer',
    company: 'AVENETRO',
    startDate: '2015-08-17',
    salary: '$2,547.85'
  },
  {
    id: 22,
    newsTitle: 'Pitts Graham',
    age: 20,
    position: 'Office Manager',
    company: 'MALATHION',
    startDate: '2020-05-08',
    salary: '$3,538.05'
  }
];
