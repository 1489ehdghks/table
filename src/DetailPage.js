import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';


const DetailPage = () => {
    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        { field: 'kind' }
    ]);

    const defaultColDef = useMemo(() => ({
        sortable: true
    }));

    const { id, id2 } = useParams();
    useEffect(() => {
        fetch(`/api/${id}/${id2}/details`)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);

    const cellClickedListener = useCallback(event => {
        //   window.location.href = "/view/" + event.data.projectName + "/" + event.data.podName;

        // fetch('/api/' + event.data.projectName + '/' + event.data.podName + '/details')
        //   .then(result => test = result.json())
    }, []);


    return (
        <div align="center" >
            <div>
                <h3 >상세</h3>
                <table border="1" width="60%" >

                    <tr>
                        <td bgcolor="red" >이름</td>
                        <td >metadata.name</td>
                        <td bgcolor="red">프로젝트</td>
                        <td>metadata.namespace</td>
                    </tr>
                    <tr>
                        <td bgcolor="red">상태</td>
                        <td>status.podIP</td>
                        <td bgcolor="red">Restart Policy</td>
                        <td>spec.restartPolicy</td>
                    </tr>
                    <tr>
                        <td bgcolor="red">소유자</td>
                        <td>metadata.ownerReferences</td>
                        <td bgcolor="red">라벨</td>
                        <td>metadata.label</td>
                    </tr>

                </table>
            </div>
            <div>
                <h3>볼륨</h3>
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
        </div >


    )
}

export default DetailPage;