import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import {
  autoGroupColumnDef,
  defaultColDef,
  rowHeight,
  sideBar,
} from "../../utils/SettingsAgGrid";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { RootState } from "../../store/store";
import { fetchProducts } from "../../store/features/product/productSlice";
import "./Table.css";
import { Spinner } from "../../components/Spinner/Spinner";
import Chart from "../../components/Chart/Chart";

export const Table = () => {

  const dispatch = useAppDispatch();
  const productData = useAppSelector((state: RootState) => state.products.data)

  const ChartRenderer = (props: any) => {    
    const data = props.data.График;
    return <Chart data={data} />;
  };

  const [columnDefs, setColumnDefs] = useState([
    { field: "Фото", checkboxSelection: true, cellRenderer: MyRenderer},
    { field: "Номенклатура", floatingFilter: true, filter: true},
    { field: "Бренд", floatingFilter: true, filter: true},
    { field: "Название", floatingFilter: true, filter: true },
    { field: "Цена", floatingFilter: true, filter: true },
    { field: "График", cellRenderer: ChartRenderer, suppressSizeToFit:true},
  ]);
  

  function MyRenderer(params: { value: string }): JSX.Element {
    return (
      <span className="my-renderer">
        <img src={params.value} className="my-spinner" alt="view" />
      </span>
    );
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return productData.length > 0 ? (
    <div className="containerStyle">
      <div className="ag-theme-alpine gridStyle">
        <AgGridReact
          rowData={productData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          sideBar={sideBar}
          autoGroupColumnDef={autoGroupColumnDef}
          rowHeight={rowHeight}
          rowSelection="multiple"
        />
      </div>
    </div>
  ) : (
    <div className="container">
      <Spinner />
    </div>
  );
};
