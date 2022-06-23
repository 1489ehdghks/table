import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const DetailPage = () => {
    const { id, id2 } = useParams();
    useEffect(() => {
        fetch(`/api/${id}/${id2}/details`)
            .then(result => result.json())
    }, []);

    return (
        <div>
            {id} {id2}
        </div>
    )
}

export default DetailPage;