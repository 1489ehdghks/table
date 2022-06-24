import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const List = () => {

    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'container', filter: true, headerCheckboxSelection: true, checkboxSelection: true, },
        { field: 'create', filter: true },
        { field: 'owner', filter: true },
        { field: 'podName', filter: true },
        { field: 'projectName', filter: true },
        { field: 'restartCount', filter: true },
        { field: 'status', filter: true },
        { field: 'kind' }
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => ({
        sortable: true
    }));

    // Example of consuming Grid Event
    const cellClickedListener = useCallback(event => {
        window.location.href = "/view/" + event.data.projectName + "/" + event.data.podName;

        // fetch('/api/' + event.data.projectName + '/' + event.data.podName + '/details')
        //   .then(result => test = result.json())
    }, []);

    // Example load data from sever
    useEffect(() => {
        fetch('/api')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);



    // Example using Grid's API
    const buttonListener = useCallback(e => {
        gridRef.current.api.deselectAll();
    }, []);

    return (
        <div>

            <div className="ag-theme-alpine" style={{ width: "100%", height: 500 }}>

                <AgGridReact
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

export default List;