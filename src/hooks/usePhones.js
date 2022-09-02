import axios from "axios";
import { useEffect, useState } from "react"


const usePhones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`http://localhost:5000/phones`)
            setPhones(data);
            data && setLoading(false);
        }
        fetchData();
    }, []);
    return {phones, setPhones, loading};
}

export default usePhones;