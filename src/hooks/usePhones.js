import axios from "axios";
import { useEffect, useState } from "react";


const usePhones = ({ page, size }) => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://warehouse-manager-258000.herokuapp.com/phones?page=${page}&size=${size}`;
            const { data } = await axios.get(url);
            setPhones(data);
            data && setLoading(false);
        }
        fetchData();
    }, [page, size]);

    return { phones, setPhones, loading };
}

export default usePhones;