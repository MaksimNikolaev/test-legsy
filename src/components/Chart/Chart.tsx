import { AgChartsReact } from 'ag-charts-react';

const Chart = ({data}:any) => {
  const options:any = { 
    data: data,
    title: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: null,
        label: {          
          fontSize: 1 // задаем размер шрифта для оси X
        },
        gridStyle: [{
          stroke: '#e7e7e7'
        }]
      },
      {
        type: 'number',
        position: 'left',
        title: null,
        label: {
          fontSize: 1 // задаем размер шрифта для оси Y
        },
        gridStyle: [{
          stroke: '#e7e7e7'
        }]
      }
    ],
    series: [{
      type: 'column',
      xKey: 'date',
      yKey: 'amount'
    }]
  };
  return (
    <AgChartsReact options={options} />
  );
};

export default Chart;
