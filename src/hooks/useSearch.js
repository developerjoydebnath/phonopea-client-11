import axios from "axios";
import { useEffect, useState } from "react";


const useSearch = (searchText) => {
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (searchText === '') {
                setError('please enter a searchtext');
                setSearchResult([])
            }
            else {
                const { data } = await axios.get(`https://warehouse-manager-258000.herokuapp.com/searchResult?search=${searchText}`);
                setSearchResult(data);
                setError(null)
                data && setLoading(false);
            }

        }
        fetchData()
    }, [searchText]);

    return { searchResult, error, loading };
}

export default useSearch;