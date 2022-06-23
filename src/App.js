import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const App = () => {

 const gridRef = useRef(); // Optional - for accessing Grid's API
 const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
  {field: '상태'},
  {field: '이름'},
  {field: '프로젝트'},
  {field: '생성일자'},
 ]);

 // DefaultColDef sets props common to all Columns
 // eslint-disable-next-line react-hooks/exhaustive-deps
 const defaultColDef = useMemo( ()=> ({
     sortable: true,
     editable : true,
     filter : 'agTextColumnFilter'
   }));

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
   console.log('cellClicked', event);
 }, []);

 const defaultColGroupDef= {};

 const columnTypes ={
  nonEditableColumn: { editable: false },
  dateColumn: {
      filter: 'agDateColumnFilter',
      suppressMenu: true
  }
 };


 // Example load data from sever
 useEffect(() => {
   fetch('https://www.ag-grid.com/example-assets/row-data.json')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
 }, []);

 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);

 return (
   <div>

     {/* Example using Grid's API */}
     <button onClick={buttonListener}>Push Me</button>

     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className="ag-theme-alpine" style={{width: 1800, height: 1024}}>

       <AgGridReact
           defaultColGroupDef={defaultColGroupDef}
           columnTypes={columnTypes}

           ref={gridRef} // Ref for accessing Grid's API

           rowData={rowData} // Row Data for Rows

           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows

           onCellClicked={cellClickedListener} // Optional - registering for Grid Event
           />
     </div>
   </div>
 );
};

export default App;