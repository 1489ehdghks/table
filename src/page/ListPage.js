import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import api from "../../"

export const ListPage= (props) => {
    const [pageSize, setPageSize] = useState(10);//한 페이지에 10개 목록
    const [totalCount, setTotalCount] = useState(100);//전체 페이지 갯수
    const [currentPage, setCurrentPage] = useState(1);//현재 페이지
    const [page,setPage]=useState([]);

    const getPages = async()=> {
        let response = await api.get('/api/user/page');
        console.log(response);
        setPage(response.data.data);
        setTotalCount(response.data.total);
    } 

    useEffect(()=>{
        getPages()
    }, [currentPage]);


    return(
        <>
            <div className="row">
                {ListPage.map(ListPage=>(
                    <div className="col-12 p-1 col-sm-4 p-sm-2 col-md-3 p-md-3" key={ListPage.id}>
                        <h5 className="title">{ListPage.name}</h5>
                        <p className="text">{ListPage.text}</p>
                    </div>
                ))}
            </div>
            <Pagination 
            total={totalCount} 
            current={currentPage} 
            pageSize={pageSize} 
            onChange={(page)=>setCurrentPage(page)}
            className="d-flex justify-center"/>
        </>
    )
};
