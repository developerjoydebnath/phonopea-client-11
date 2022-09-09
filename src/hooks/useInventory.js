import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const useInventory = () => {
    const [allPhone, setAllPhone] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://warehouse-manager-258000.herokuapp.com/allPhone')
            setAllPhone(data)
            data && setLoading(false);
        }
        fetchData()
    }, [])
    return { allPhone, setAllPhone, loading }
}

export default useInventory;