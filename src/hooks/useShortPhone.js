import axios from "axios";
import { useEffect, useState } from "react";


const useShortPhone = () => {
    const [shortPhone, setShortPhone] = useState([]);
    console.log(shortPhone)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/shortPhones`);
            setShortPhone(data);
            data && setLoading(false);
        }
        fetchData()
    }, []);

    return { shortPhone, loading };
}

export default useShortPhone;